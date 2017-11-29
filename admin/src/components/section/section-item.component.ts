import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material'

import { ErrorDialogComponent } from '../error'
import { QuestionDialogComponent } from '../question'

import { UUID } from '@core/uuid'

import { Section } from '@common/models'
import { SectionService } from '../../services'

@Component({
  selector: 'section-item',
  templateUrl: './section-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SectionItemComponent implements OnInit {

  item: Section = new Section()

  get isNew() {
    return this.item.id.version === null
  }

  itemForm: FormGroup

  constructor(
    private readonly _sectionService: SectionService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _fb: FormBuilder
  ) {
    this.itemForm = this._fb.group({
      enable:        [true, Validators.required],

      url:           ['', Validators.required ],

      title:         ['', Validators.required ],
      description:   [''],

      ogTitle:       [''],
      ogDescription: [''],
    })
  }

  ngOnInit() {
    const id = this._route.params.subscribe(params => {

      let id: UUID

      try {
        id = new UUID(params['id'])
      } catch (error) {
        this._dialog.open(ErrorDialogComponent, { data: error })
        this._router.navigate([SectionService.BaseURL])
        return
      }

      if (id.version !== null)
        this._sectionService.get(id).subscribe(item => {
          this.item = item
          this.itemForm.patchValue(this.item)
        })
    })
  }

  save() {
    this.itemForm.updateValueAndValidity()

    if (this.itemForm.invalid)
      return

    Object.assign(this.item, this.itemForm.value)

    if (this.isNew)
      this._sectionService.add(this.item).subscribe( item => this._router.navigate([SectionService.BaseURL]) )
    else
      this._sectionService.update(this.item).subscribe( item => this._router.navigate([SectionService.BaseURL]) )
  }

  delete() {
    const dialogRef = this._dialog.open(QuestionDialogComponent, {
      data: {
        title: 'Удалить раздел?',
        message: `Вы уверены, что хотите удалить раздел "${this.item.title}"?`
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this._sectionService.delete(this.item).subscribe( item => this._router.navigate([SectionService.BaseURL]) )
    })
  }
}

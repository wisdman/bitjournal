import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material'

import { ErrorDialogComponent } from '../error'
import { QuestionDialogComponent } from '../question'

import { UUID } from '@core/uuid'

import { Publication } from '@common/models'
import { PublicationService } from '../../services'

@Component({
  selector: 'publication-item',
  templateUrl: './publication-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PublicationItemComponent implements OnInit {

  item: Publication = new Publication()

  get isNew() {
    return this.item.id.version === null
  }

  itemForm: FormGroup

  constructor(
    private readonly _publicationService: PublicationService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog,
    private readonly _fb: FormBuilder
  ) {
    this.itemForm = this._fb.group({
      enable:        [true, Validators.required],

      url:           { value: '/', disabled: true, },

      bigTitle:      [''],
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
        this._router.navigate([PublicationService.BaseURL])
        return
      }

      if (id.version !== null)
        this._publicationService.get(id).subscribe(item => {
          this.item = item
          this.itemForm.patchValue(this.item)
        })
    })
  }

  resetUrl() {

  }

  save() {
    this.itemForm.updateValueAndValidity()

    if (this.itemForm.invalid)
      return

    Object.assign(this.item, this.itemForm.value)

    if (this.isNew)
      this._publicationService.add(this.item).subscribe( item => this._router.navigate([PublicationService.BaseURL]) )
    else
      this._publicationService.update(this.item).subscribe( item => this._router.navigate([PublicationService.BaseURL]) )
  }

  delete() {
    const dialogRef = this._dialog.open(QuestionDialogComponent, {
      data: {
        title: 'Удалить публикацию?',
        message: `Вы уверены, что хотите удалить публикацию "${this.item.title}"?`
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this._publicationService.delete(this.item).subscribe( item => this._router.navigate([PublicationService.BaseURL]) )
    })
  }
}

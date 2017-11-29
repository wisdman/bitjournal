import { Component, Inject } from '@angular/core'

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: [ './question.component.css' ]
})
export class QuestionDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }
  ) {}
}

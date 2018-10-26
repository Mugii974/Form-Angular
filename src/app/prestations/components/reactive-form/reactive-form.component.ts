import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {


  public states = Object.values(State);
  public form: FormGroup;
  private init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.createForm();
  }
  /**
   * Par convention il faut mettre les mêmes noms d'attributs que pour la classe Prestation
   */
  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required
      ],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJours: [
        this.init.nbJours
      ],
      tjmHt: [
        this.init.tjmHt
      ],
      tauxTva: [
        this.init.tauxTva
      ],
      state: [
        this.init.state
      ],
    });
  }

  public onSubmit() {
    this.nItem.emit(this.form.value);
  }
  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}


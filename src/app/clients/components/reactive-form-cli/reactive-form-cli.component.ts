import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientState } from 'src/app/shared/enums/client-state.enum';
import { Client } from 'src/app/shared/models/client.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-cli',
  templateUrl: './reactive-form-cli.component.html',
  styleUrls: ['./reactive-form-cli.component.scss']
})
export class ReactiveFormCliComponent implements OnInit {
  public states = Object.values(ClientState);
  public form: FormGroup;
  private init = new Client();

  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      nom: [
        this.init.nom,
        Validators.required
      ],
      adresse: [
        this.init.adresse,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      codePostal: [
        this.init.codePostal,
        Validators.compose([Validators.required, Validators.pattern('^(([0-8][0-9])|(9[0-5])|(2[ab]))[0-9]{3}$')])
      ],
      ville: [
        this.init.ville
      ],
      tjm_ht: [
        this.init.tjm_ht
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

import { Component, OnInit, Input, Output,
         OnChanges, EventEmitter, trigger,
         state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'sui-modal',
  templateUrl: '/sui.modal.component.html',
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() headerText: string;
  @Input() headerIcon: string= '';
  @Input() cssClassHeader: string= 'sui-theme';
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() { }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}

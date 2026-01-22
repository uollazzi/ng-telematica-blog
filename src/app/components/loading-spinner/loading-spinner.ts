import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  imports: [],
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.css',
})
export class LoadingSpinner {
  @Input()
  color: "blue" | "yellow" | "red" = "blue";

  @Input()
  type: "border" | "grow" = "border";
}

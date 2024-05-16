import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule  } from '@angular/forms';
import { TestComponent } from './test/test.component';  // Import the TestComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Store';
}

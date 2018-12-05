import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../_services/authentification.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	public userData: Observable<User | null> = this.authService.getCurrentUser();

  constructor(
  	private authService: AuthentificationService
  	) {}

  ngOnInit() {
  }

}

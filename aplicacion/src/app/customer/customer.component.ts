import { Component, OnInit,HostBinding } from '@angular/core';

import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 resultado: any = [];
  @HostBinding('class') classes = 'row';
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCostumers();
  }

  getCostumers() {
    this.customerService.getCustomers()
      .subscribe(
        res => {
          this.resultado = res;
        },
        err => console.error(err)
      );
  }

}

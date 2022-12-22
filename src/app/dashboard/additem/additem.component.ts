import {Component, OnInit} from '@angular/core';
import {Item} from "../../item";
import {ItemService} from "../../item.service";
import {iterator} from "rxjs/internal/symbol/iterator";
import {HttpClient} from "@angular/common/http";
import {User} from "../../user";
import {Observable} from "rxjs";
import {DashboardComponent} from "../dashboard.component";
import {ToastrService} from "ngx-toastr";
import {routerLink} from "@angular/core/schematics/migrations/router-link-with-href/util";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  item: Item = new Item();
  private itemType: any;
  alert: boolean = false;
  redAlert: boolean = false;


  constructor(private itemService: ItemService,
              private dashboard: DashboardComponent, private toastr: ToastrService,
              private route:Router) {


  }

  ngOnInit(): void {
  }

  addItem() {

    if (this.item.itemBrand != null &&
      this.item.itemName != null &&
      this.item.price != null &&
      this.item.expiryDate != null &&
      this.item.type != null) {

      this.itemService.addItem(this.item).subscribe(data => {
          console.log(data);
          this.dashboard.getItems();
          this.toastr.success("Item has beed added", "Success");
          this.route.navigate(['/dashboard'])
          this.alert = true;
          this.redAlert = false
        },
        error => this.toastr.error("Please enter numeric value for price", "Error"))
    } else {
      this.redAlert = true
      this.alert = false;

    }


  }


  closeAlert() {
    this.redAlert = false
    this.alert = false;
  }

  // showToastr(){
  //   this.toastr.success("Item has beed added","Success")
  // }
  cancelAddItemForm() {

  }
}

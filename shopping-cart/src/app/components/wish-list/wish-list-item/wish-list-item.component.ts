import { Component, OnInit } from '@angular/core';
import {WishListService} from 'src/app/services/wish-list.service'

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})
export class WishListItemComponent implements OnInit {
  wishList: number[] = [];

  constructor(
    private wishListService: WishListService
  ) { }

  ngOnInit(): void {
  }


  loadWishList(){
      this.wishListService.getWishList().subscribe(productIds => {
        this.wishList = productIds;
      })
  }
}

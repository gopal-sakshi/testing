import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { GetItemDetailsService } from '../../services/get-item-details.service';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

    showingTwo:boolean = true;
    itemId: string;
    item: any;
    constructor(
        private router: Router,
        // private activatedRouteSnapshot: ActivatedRouteSnapshot
        // it seems we cant inject activatedRouteSnapshot... its not a service... use ActivatedRoute instead
        private activatedRoute: ActivatedRoute,
        private getItemDetailsService: GetItemDetailsService
    ) {

        // if routes are mentioned like this
        //      router-12/itemDetail/:id
        //  ngOnInit() WILL NOT get called when we navigate from
        //      router-12/itemDetail/2 ======================>   router-12/itemDetail/3
        //  so, thats why we have to manually set shouldReuseRoute =====> false 
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        console.log("ngOnInit ===> item-detail component ", this.activatedRoute.snapshot.params.id)
        this.itemId = this.activatedRoute.snapshot.params.id;
        this.getItemDetailsService.getItemById(parseInt(this.itemId)).subscribe(res => this.item = res);
    }

    navigate23() {
        console.log("navigate ayyaa ===> but ee comp malli render avvadu");
        console.log("but url lo item id maatram maarutundi");
        console.log("anduke route reuse strategy use cheyyi");
        this.showingTwo = !this.showingTwo;
        if(this.showingTwo) {
            this.router.navigate(['../', '5'], { relativeTo: this.activatedRoute })
        } else {
            this.router.navigate(['../', '2'], { relativeTo: this.activatedRoute })
        }
    }

}
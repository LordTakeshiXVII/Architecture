import { Component } from "@angular/core";
import { AppUserService } from "src/app/services/user.service";

@Component({ selector: "app-list", templateUrl: "./list.component.html" })
export class AppListComponent {
    list: any;

    constructor(private readonly appUserService: AppUserService) {
        this.appUserService.list().subscribe((list: any) => this.list = list);
    }
}

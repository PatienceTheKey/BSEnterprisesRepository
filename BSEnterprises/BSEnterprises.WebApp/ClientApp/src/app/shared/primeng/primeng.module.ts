import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import {ToastModule} from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CardModule } from 'primeng/card';
import {ConfirmationService} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';
import {  GrowlModule } from 'primeng/growl';
import {ConfirmDialogModule, ChartModule, PanelMenuModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/paginator';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TooltipModule} from 'primeng/tooltip';
import {MessageModule} from 'primeng/message';
import {MenuItem} from 'primeng/api';
import {KeyFilterModule} from 'primeng/keyfilter';
@NgModule({
    imports: [
        KeyFilterModule,
        MessageModule,
        TooltipModule,
        ToggleButtonModule,
        ScrollPanelModule,
        PaginatorModule,
        CalendarModule,
        GrowlModule,
        ConfirmDialogModule,
        CardModule,
        ChartModule,
        MenubarModule,
        DialogModule,
        BrowserAnimationsModule,
        DropdownModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        PanelModule,
        InputTextareaModule,
        FieldsetModule,
        TableModule,
        DataViewModule,
        ToastModule,
        CalendarModule,
        PanelMenuModule
    ],
    exports: [
        KeyFilterModule,
        MessageModule,
        TooltipModule,
        ToggleButtonModule,
        ScrollPanelModule,
        PaginatorModule,
        CalendarModule,
        GrowlModule,
        ConfirmDialogModule,
        CardModule,
        ChartModule,
        MenubarModule,
        DialogModule,
        BrowserAnimationsModule,
        DropdownModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        PanelModule,
        InputTextareaModule,
        FieldsetModule,
        TableModule,
        DataViewModule,
        ToastModule,
        CalendarModule,
        PanelMenuModule
    ],
    declarations: [],
    providers: [ConfirmationService],
})
export class PrimeNgModule { }

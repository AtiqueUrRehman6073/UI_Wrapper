import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
// import {AutoCompleteModule} from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
// import {ChartModule} from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
// import {ChipsModule} from 'primeng/chips';
// import {CodeHighlighterModule} from 'primeng/codehighlighter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
// import {DataViewModule} from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
// import {EditorModule} from 'primeng/editor';
// import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
// // import {FullCalendarModule} from 'primeng/fullcalendar';
// import {GalleriaModule} from 'primeng/galleria';
// import {InplaceModule} from 'primeng/inplace';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
// import {InputTextareaModule} from 'primeng/inputtextarea';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
// import {MegaMenuModule} from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
// import {MultiSelectModule} from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
// import {OrganizationChartModule} from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
// import {PickListModule} from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
// import {SplitButtonModule} from 'primeng/splitbutton';
// import {StepsModule} from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
// import {TerminalModule} from 'primeng/terminal';
// import {TieredMenuModule} from 'primeng/tieredmenu';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
// import {TreeModule} from 'primeng/tree';
// import {TreeTableModule} from 'primeng/treetable';
// import {VirtualScrollerModule} from 'primeng/virtualscroller';
// import { MessageService } from 'primeng/api/public_api';


const modules = [
  AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
  CheckboxModule,
  ConfirmDialogModule,
  ColorPickerModule,
  ContextMenuModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputMaskModule,
  InputSwitchModule,
  InputTextModule,
  LightboxModule,
  ListboxModule,
  MenuModule,
  MenubarModule,
  MessagesModule,
  MessageModule,
  OrderListModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelModule,
  PanelMenuModule,
  PasswordModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  ScrollPanelModule,
  SelectButtonModule,
  SlideMenuModule,
  SliderModule,
  SpinnerModule,
  TabMenuModule,
  TableModule,
  TabViewModule,
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  // MessageService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...modules]
})
export class PrimeModule { }

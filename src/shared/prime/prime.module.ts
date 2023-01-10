import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SpinnerModule } from 'primeng/spinner';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { DockModule } from 'primeng/dock';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {TerminalModule} from 'primeng/terminal';
import {GalleriaModule} from 'primeng/galleria';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SpeedDialModule} from 'primeng/speeddial';
// import {CodeHighlighterModule} from 'primeng/codehighlighter';
// import {ChipsModule} from 'primeng/chips';
// import {DataViewModule} from 'primeng/dataview';
// import {AutoCompleteModule} from 'primeng/autocomplete';
// import {ChartModule} from 'primeng/chart';
// import {EditorModule} from 'primeng/editor';
// import {FieldsetModule} from 'primeng/fieldset';
// // import {FullCalendarModule} from 'primeng/fullcalendar';
// import {InplaceModule} from 'primeng/inplace';
// import {InputTextareaModule} from 'primeng/inputtextarea';
// import {MegaMenuModule} from 'primeng/megamenu';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {OrganizationChartModule} from 'primeng/organizationchart';
// import {PickListModule} from 'primeng/picklist';
// import {StepsModule} from 'primeng/steps';
// import {SplitButtonModule} from 'primeng/splitbutton';
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
  DockModule,
  FileUploadModule,
  GalleriaModule,
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
  SpeedDialModule,
  SpinnerModule,
  TabMenuModule,
  TableModule,
  TabViewModule,
  TerminalModule,
  TieredMenuModule,
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  TreeTableModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...modules]
})
export class PrimeModule { }

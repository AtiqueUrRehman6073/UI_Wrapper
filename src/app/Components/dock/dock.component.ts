import { NodeService } from './../../../services/nodeservice.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'app-dock',
    templateUrl: './dock.component.html',
    styleUrls: ['./dock.component.scss'],
    providers: [MessageService, TerminalService, NodeService]
})
export class DockComponent implements OnInit {
    displayTerminal: boolean = false;

    displayFinder: boolean = false;

    displayGalleria: boolean = false;
    
    treeView: boolean = false;

    loading: boolean = false;

    dockBasicItems: Array<MenuItem> = [];

    dockItems: Array<MenuItem> = [];

    menubarItems: any = [];

    responsiveOptions: any = [];

    images: any = [];

    selectedFile: TreeNode = {};

    files: Array<TreeNode> = [];
    files1: Array<TreeNode> = [];


    constructor(private messageService: MessageService,private nodeService:NodeService) { }

    ngOnInit() {
        this.dockBasicItems = [
            {
                label: 'Finder',
                icon: "assets/Dock/finder.svg"
            },
            {
                label: 'App Store',
                icon: "assets/Dock/appstore.svg"
            },
            {
                label: 'Photos',
                icon: "assets/Dock/photos.svg"
            },
            {
                label: 'Trash',
                icon: "assets/Dock/trash.png"
            }
        ];

        this.dockItems = [
            {
                label: 'Finder',
                tooltipOptions: {
                    tooltipLabel: "Finder",
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15
                },
                icon: "assets/Dock/finder.svg",
                command: () => {
                    this.displayFinder = true;
                }
            },
            {
                label: 'Terminal',
                tooltipOptions: {
                    tooltipLabel: "Terminal",
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15
                },
                icon: "assets/Dock/terminal.svg",
                command: () => {
                    this.displayTerminal = true;
                }
            },
            {
                label: 'App Store',
                tooltipOptions: {
                    tooltipLabel: "App Store",
                    tooltipPosition: 'top',
                    positionLeft: 15,
                    positionTop: -15
                },
                icon: "assets/Dock/appstore.svg",
                command: () => {
                    this.messageService.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
                }
            },
            {
                label: 'Safari',
                tooltipOptions: {
                    tooltipLabel: "Safari",
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15
                },
                icon: "assets/Dock/safari.svg",
                command: () => {
                    this.messageService.add({ severity: 'warn', summary: 'Safari has stopped working' });
                }
            },
            {
                label: 'Photos',
                tooltipOptions: {
                    tooltipLabel: "Photos",
                    tooltipPosition: 'top',
                    positionTop: -15,
                    positionLeft: 15
                },
                icon: "assets/Dock/photos.svg",
                command: () => {
                    this.displayGalleria = true
                }
            },
            {
                label: 'GitHub',
                icon: "assets/Dock/github.svg",
            },
            {
                label: 'Trash',
                icon: "assets/Dock/trash.png",
                command: () => {
                    this.messageService.add({ severity: 'info', summary: 'Empty Trash' });
                }
            }
        ];

        this.menubarItems = [
            {
                label: 'Finder',
                className: 'menubar-root'
            },
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'Bookmark',
                                icon: 'pi pi-fw pi-bookmark'
                            },
                            {
                                label: 'Video',
                                icon: 'pi pi-fw pi-video'
                            },

                        ]
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Edit',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label: 'Users',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit'
            }
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        this.loading = false;
        this.nodeService.getFiles().then((file:any) => this.files1 = file);
        this.nodeService.getFiles().then((files:any) => {
            this.files = [{
                label: 'Root',
                children: files
            }];
        });
        ///////////======>  lazy loading folders <=====///////////
        // setTimeout(() => {
        //     this.nodeService.getLazyFiles().then((files:any) => this.files = files);
        //     this.loading = false;
        // }, 1000);

    }

    nodeSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    nodeUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
    nodeExpand(event:any) {
        if (event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then((nodes:any) => {
                event.node.children = nodes;
                this.messageService.add({ severity: 'info', summary: 'Children Loaded', detail: event.node.label });
            });
        }
    }
    switchView(){
        this.treeView = !this.treeView;
    }
}
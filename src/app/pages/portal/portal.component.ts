import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService, DataSourceService, Context, ContextService, MessageService,
         Feature, FeatureType, FeatureService, IgoMap, LayerService, MapService, MediaService,
         OverlayService, SearchService, ToolService } from '@igo2/igo2';

import { controlSlideX, controlSlideY, mapSlideX, mapSlideY } from './portal.animation';

import { SidenavService } from './sidenav';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.styl'],
  animations: [
    controlSlideX(),
    controlSlideY(),
    mapSlideX(),
    mapSlideY()
  ]
})
export class PortalComponent implements OnInit, OnDestroy {

  static SWIPE_ACTION = {
    RIGHT: 'swiperight',
    LEFT: 'swipeleft'
  };

  public selectedFeature$$: Subscription;
  public features$$: Subscription;
  public context$$: Subscription;

  public featureToast: Feature;

  public map = new IgoMap({
    controls: {
      scaleLine: true,
      attribution: false
    },
    overlay: true
  });

  get sidenavOpened(): boolean { return this.sidenavService.isOpened; }
  set sidenavOpened(value: boolean) {
    this.sidenavService.open(value);
  }

  public toastOpened: boolean = false;
  public toastShown: boolean = false;
  public displaySearchResultsList: boolean = false;

  public searchTerm: string = '';

  constructor(public authService: AuthService,
              public featureService: FeatureService,
              public mediaService: MediaService,
              public toolService: ToolService,
              public searchService: SearchService,
              public overlayService: OverlayService,
              public mapService: MapService,
              public layerService: LayerService,
              public dataSourceService: DataSourceService,
              public contextService: ContextService,
              public messageService: MessageService,
              public sidenavService: SidenavService,
              public cdRef: ChangeDetectorRef) {}

  ngOnInit() {

    window['IGO'] = this;

    this.features$$ = this.featureService.features$
      .subscribe((features) => this.handleFeaturesChange(features));

    this.selectedFeature$$ = this.featureService.selectedFeature$
      .subscribe((feature) => this.handleFeatureSelect(feature));

    this.context$$ = this.contextService.context$
         .subscribe((context) => this.handleContextChange(context));
  }

  ngOnDestroy() {
    this.selectedFeature$$.unsubscribe();
    this.features$$.unsubscribe();
    this.context$$.unsubscribe();
  }

  closeSidenav() {
    this.sidenavOpened = false;
    /*this.toastOpened = false;
    if (this.mediaService.media$.value === 'mobile' &&
        this.featureService.focusedFeature$.value) {
      this.toastShown = true;
    }*/
  }

  openSidenav() {
    this.toolService.unselectTool();
    this.sidenavOpened = true;
    // this.toastShown = false;
  }

  toggleSidenav() {
    if (this.sidenavOpened) {
      this.closeSidenav();
    } else {
      this.openSidenav();
    }
  }

  removeMapBrowserClass(e) {
    e.element.classList.remove('toast-shown-offset');
    e.element.classList.remove('toast-opened-offset');
    e.element.classList.remove('sidenav-offset');
  }

  updateMapBrowserClass(e) {
    if (this.toastOpened && this.toastShown) {
      e.element.classList.add('toast-opened-offset');
      return;
    }

    if (this.toastShown) {
      e.element.classList.add('toast-shown-offset');
    }

    if (this.sidenavOpened) {
      e.element.classList.add('sidenav-offset');
    }
  }

  swipe(action: string) {
    const featuresList = this.featureService.features$.value;
    const focusedFeature = this.featureService.focusedFeature$.value;

    let index = featuresList.findIndex(f => f.id === focusedFeature.id);
    if (index < 0) { return; }

    if (action === PortalComponent.SWIPE_ACTION.LEFT) {
      index += 1;
    } else if (action === PortalComponent.SWIPE_ACTION.RIGHT) {
      index -= 1;
    }

    if (featuresList[index]) {
      this.featureService.selectFeature(featuresList[index]);
    }
  }

  private handleFeaturesChange(features: Feature[]) {
    if (features.length > 0) {
      if (features[0].type.toString() === 'Feature' &&
         (features[0].source !== 'Nominatim (OSM)' &&
         features[0].source !== 'ICherche Québec')) {

           this.featureService.selectFeature(features[0]);
      } else {
        this.displaySearchResultsList = true;
      }
    }
  }

  handleFeatureFocus(feature: Feature) {
    if (feature.type === FeatureType.Feature) {
      this.overlayService.setFeatures([feature]);
    }
  }

  handleFeatureSelect(feature: Feature) {
    if (!feature) {
      this.toastShown = false;
      return;
    }
    if (feature.type === FeatureType.Feature) {
      if (feature.source !== 'Nominatim (OSM)' &&
         feature.source !== 'ICherche Québec') {

           this.overlayService.setFeatures([feature]);
           this.toastShown = true;
           return;
      } else {
        this.overlayService.setFeatures([feature], 'zoom');
        this.displaySearchResultsList = false;
        this.toastShown = false;
      }
    }
  }

  handleContextChange(context: Context) {
    if (context) {
      const text = `'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Suspendisse sit amet tincidunt purus.'`;
      this.messageService.info(text, context.title);
      if (this.mediaService.media$.value === 'mobile') {
        this.closeSidenav();
      }
    }
  }

  search(term: string) {
    this.searchTerm = term;
  }

  clickSearchBar() {
    this.closeSidenav();
    if (this.searchTerm.length >= 3) {
      this.searchService.search(this.searchTerm);
    }
  }

  clickoutSearchBar() {
    this.displaySearchResultsList = false;
  }

}

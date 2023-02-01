/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_2RCsyyaAAzNrEUPF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2RCsyyaAAzNrEUPF(bh) {
    try {
      bh = this.sd_CzQLx1mbrhPMrush(bh);
      //appendnew_next_sd_2RCsyyaAAzNrEUPF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2RCsyyaAAzNrEUPF');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_CzQLx1mbrhPMrush(bh) {
    try {
      bh = this.sd_seRCFt4DwZMEJn1E(bh);
      //appendnew_next_sd_CzQLx1mbrhPMrush
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CzQLx1mbrhPMrush');
    }
  }

  sd_seRCFt4DwZMEJn1E(bh) {
    try {
      const page = this.page;

      page.services = [
        {
          image: '/assets/Web/images/construction-icon.png',
          name: 'Construction',
          desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
        {
          image: '/assets/Web/images/roofing-icon.png',
          name: 'ROOFING',
          desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
        {
          image: '/assets/Web/images/remodeling-icon.png',
          name: 'REMODELING',
          desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
        },
      ];

      page.works = [
        {
          image: '/assets/Web/images/home-kitchen.jpg',
        },

        {
          image: '/assets/Web/images/portfolio-2.jpg',
        },
        {
          image: '/assets/Web/images/portfolio-3.jpg',
        },
      ];

      page.names = [
        {
          image: '/assets/Web/images/female.jpg',
          name: 'Jane Doe',
          jobtitle: 'Home Owner',
          desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. ',
        },

        {
          image: '/assets/Web/images/male.jpg',
          name: 'Jane Doe',
          jobtitle: 'Business Owner',
          desc: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. ',
        },
      ];

      //appendnew_next_sd_seRCFt4DwZMEJn1E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_seRCFt4DwZMEJn1E');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}

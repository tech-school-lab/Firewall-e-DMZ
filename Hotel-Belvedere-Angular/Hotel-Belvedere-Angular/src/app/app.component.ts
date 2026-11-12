import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

declare global {
  interface Window {
    initHotelBelvedereGuide?: () => () => void;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private scriptElement?: HTMLScriptElement;
  private destroyGuide?: () => void;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngAfterViewInit(): void {
    // Carica il motore solo dopo che il template originale è presente nel DOM.
    const script = this.document.createElement('script');
    script.src = 'assets/guide.js';
    script.async = true;
    script.onload = () => {
      this.destroyGuide = window.initHotelBelvedereGuide?.();
    };
    script.onerror = () => {
      console.error('Impossibile caricare il motore della guida (assets/guide.js).');
    };
    this.scriptElement = script;
    this.document.body.appendChild(script);
  }

  ngOnDestroy(): void {
    this.destroyGuide?.();
    this.scriptElement?.remove();
  }
}

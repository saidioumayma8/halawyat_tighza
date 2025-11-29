import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('ar');
  public currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Set the default language from localStorage or browser language
    const savedLang = localStorage.getItem('language');
    const browserLang = translate.getBrowserLang();
    const defaultLang = savedLang || (browserLang && ['ar', 'fr'].includes(browserLang) ? browserLang : 'ar');
    
    this.setLanguage(defaultLang);
  }

  setLanguage(lang: string) {
    // Update the direction of the document
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Set the language in the translate service
    this.translate.use(lang);
    
    // Save the language to localStorage
    localStorage.setItem('language', lang);
    
    // Update the current language subject
    this.currentLangSubject.next(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

  toggleLanguage() {
    const currentLang = this.getCurrentLanguage();
    const newLang = currentLang === 'ar' ? 'fr' : 'ar';
    this.setLanguage(newLang);
  }
}
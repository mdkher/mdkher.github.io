import { Injectable, signal, effect, inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private document = inject(DOCUMENT);

  // Default to Light Mode (false)
  isDark = signal(false);

  constructor() {
    effect(() => {
      const root = this.document.documentElement;
      if (this.isDark()) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    });
  }

  toggle() {
    this.isDark.update((v) => !v);
  }
}

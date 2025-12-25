import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursorService {
    // Signals
    previewImage = signal<string | null>(null);
    isHovering = signal<boolean>(false);

    setPreview(image: string) {
        this.previewImage.set(image);
        this.isHovering.set(true);
    }

    clearPreview() {
        this.previewImage.set(null);
        this.isHovering.set(false);
    }
}

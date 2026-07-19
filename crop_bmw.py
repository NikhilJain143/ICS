from PIL import Image

def process_images():
    print("Loading images...")
    b = Image.open('/Users/hello/Downloads/BMW Before pictures.jpeg')
    a = Image.open('/Users/hello/Downloads/BMW After pictures.jpeg')

    wb, hb = b.size
    wa, ha = a.size
    print(f"Before size: {wb}x{hb}")
    print(f"After size: {wa}x{ha}")

    # The before picture is a bit zoomed in and shifted down.
    # We want to crop out the number plates at the bottom.
    # In Before: plate takes up bottom ~15-20%. Let's keep top 80%.
    # In After: plate is at bottom, but image has more space. Let's keep top 85%.

    cb = b.crop((0, 0, wb, int(hb * 0.82)))
    ca = a.crop((0, 0, wa, int(ha * 0.85)))

    # Now to align them, let's force them both to exactly 4:3 aspect ratio 
    # (which is what the slider uses) to prevent css from dynamically re-cropping them inconsistently.
    def force_4_3(img):
        w, h = img.size
        # target ratio is 4:3
        target_w = w
        target_h = int(w * 3/4)
        if target_h > h:
            target_h = h
            target_w = int(h * 4/3)
            
        left = (w - target_w) // 2
        top = 0 # keep top aligned
        right = left + target_w
        bottom = top + target_h
        return img.crop((left, top, right, bottom))
    
    cb = force_4_3(cb)
    ca = force_4_3(ca)

    cb = cb.resize((1200, 900), Image.Resampling.LANCZOS)
    ca = ca.resize((1200, 900), Image.Resampling.LANCZOS)

    cb.save('/Users/hello/Downloads/ICE/public/images/bmw_before.jpg', quality=90)
    ca.save('/Users/hello/Downloads/ICE/public/images/bmw_after.jpg', quality=90)
    print("Done!")

if __name__ == '__main__':
    process_images()

# 💌 Sara's Coupon Book

_A romantic, QR-powered React web app designed as a magical gift._

Sara's Coupon Book is a lovingly crafted React + Vite app that presents a whimsical collection of animated love coupons, complete with smooth card-flipping effects, responsive layouts, and scannable QR codes that lead to redeemable routes. Built as a digital spellbook of affection, this app combines sincerity, animation, and code in a one-of-a-kind love letter experience.

---

## ✨ Features

- **📖 One-Card-at-a-Time View:**  
  Each coupon appears individually, with an elegant **flip effect** and a **Next Coupon** button for progression.

- **🎞️ Smooth Flip Animations:**  
  Uses `Framer Motion` with `Tailwind CSS` utilities for a 3D-like flipping experience (`preserve-3d`, `rotate-y-180`, etc.).

- **📱 Mobile Optimized:**  
  Layout, font sizes, and QR scaling are tailored for smaller screens.

- **🧭 Dynamic Routing with QR Codes:**  
  Each coupon has a dedicated URL accessible via QR code (e.g., `/redeem/sancha-duty`), allowing real-world interactivity.

- **🔤 Slugified URLs:**  
  A utility function (`/utils/slugify.js`) ensures consistent links across the app.

- **🖼️ Full Image Display:**  
  Images are rendered in full using `object-contain` with max height constraints—no cropping, no compromises.

- **🧪 Fully Testable Build:**  
  App passes linting and builds cleanly with:
  ```bash
  npm run lint
  npm run build
  ```

---

## 🛠 Tech Stack

| Technology    | Purpose                   |
| ------------- | ------------------------- |
| React         | UI Framework              |
| Vite          | Lightning-fast build tool |
| Framer Motion | Card flip animations      |
| Tailwind CSS  | Utility-first styling     |
| Netlify       | Deployment                |

---

## 🚧 Known Issues

- ❗ If user taps **beyond the QR code**, it may trigger fullscreen image mode. A fix is in progress to either disable this behavior or add a back button.
- ❗ “Next Coupon” button can be hard to see on white backgrounds — this will be revised in future styling pass.
- ❗ Some spacing and instructions (e.g. "Click image for QR code") may be added to improve mobile UX.

---

## 🧙‍♂️ How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/your-username/saras-coupon-book.git
cd saras-coupon-book

# 2. Install dependencies
npm install

# 3. Start the app
npm run dev
```

Visit `http://localhost:5173` to view.

---

## 💭 Inspiration

This app was created as a heartfelt gift for a very special someone.
More than code—it’s a digital bouquet, a handwritten poem, and a magic spell.
Every click is a little act of love.

---

## 📸 Example Screenshot

![Example Coupon Card](public/assets/the-heart-voucher.png)

---

## 🔒 License

This project is a private gift and not intended for commercial use.
For personal customization or gifting inspiration, feel free to fork.

---

## 🧠 Author

**William Haynes**
MERN Developer · AI Explorer · Storybuilder
[williamhaynesportfolio.com](https://www.williamhaynesportfolio.com)

---

> Because love, like great software, deserves thoughtful UX.

```

---

Let me know if you'd like:
- A **lightweight version** for GitHub
- A **private dedication section**
- Or for me to generate an actual `coupon-preview.png` thumbnail for visuals

Happy to help you polish and publish. 💫
```

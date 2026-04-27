export const module = {
  slug: 'better-top-banner',
  name: 'Better Top Banner',
  headline: 'The top banner module PrestaShop should have shipped with.',
  subheadline:
    'Replaces simple promo banners and bloated marketing suites. Adds what you actually need: live free-shipping progress, multi-language stacked banners, per-page targeting, CTA tracking, and cart-rule connection.',
  ctaText: 'Get it on Gumroad',
  ctaUrl: 'https://winkler58.gumroad.com/l/better-top-banner',

  socialProof: {
    compatibility: 'PrestaShop 8.0+',
    price: 'One-time \u20AC24.99',
  },

  problems: [
    {
      title: 'The default banner is a JPEG.',
      description:
        'Static image. No countdown, no targeting, no free-shipping logic. Customers scroll right past it.',
    },
    {
      title: "Can't use background images.",
      description:
        'The stock module limits you to a single foreground image. No layered visuals, no full-bleed backgrounds, no design flexibility.',
    },
    {
      title: 'No control over image size.',
      description:
        'Whatever you upload renders at whatever size PrestaShop decides. No max-height, no positioning options, no responsive behaviour.',
    },
    {
      title: 'Marketing suites want a subscription.',
      description:
        "Pay monthly for the one banner feature you'll use, plus fifty you won't. And they tend to break on every PrestaShop update.",
    },
    {
      title: 'You wrote your own.',
      description:
        "A custom block, a hardcoded threshold, an inline <style> in the theme. Now it's a maintenance problem and the page reload makes the free-shipping math feel off.",
    },
  ],

  features: [
    {
      icon: 'truck',
      title: 'Live free-shipping offer',
      benefit:
        "Banner text updates the moment a visitor adds or removes a product. Pure AJAX \u2014 listening to PrestaShop's native cart-update event. No reload.",
    },
    {
      icon: 'eye',
      title: 'WYSIWYG live preview',
      benefit:
        'Sticky preview at the top of the back-office form. Same HTML and CSS as the storefront. Colours, fonts, image, timer, CTA \u2014 updating as you type.',
    },
    {
      icon: 'target',
      title: 'Per-page targeting',
      benefit:
        'Homepage welcome, category-specific promos, cart-page free-shipping nudges. All running at once, each on the right pages.',
    },
    {
      icon: 'layers',
      title: 'Multiple banners stacked',
      benefit:
        'Run as many as you like. Drag-and-drop to reorder. Each has its own dismiss cookie \u2014 closing one never hides another.',
    },
    {
      icon: 'shield',
      title: 'Built to survive updates',
      benefit:
        "Pure hook integration. No core overrides, no override directory. Minor PrestaShop updates won't break the module or wipe your settings.",
    },
    {
      icon: 'clock',
      title: 'Schedule once, forget it',
      benefit:
        "Per-banner start and end dates. Auto-activates and auto-expires. Status badges show what's Live, Scheduled, or Expired.",
    },
  ],

  useCases: {
    heading: 'What you can build in 30 seconds',
    intro:
      'Concrete examples \u2014 and you can run all of them at the same time.',
    examples: [
      'A Black Friday banner that auto-activates on a date and disappears on another',
      'A pulsing CTA button that links to a sale category',
      'A free-shipping progress banner that updates live as shoppers add products',
      'A homepage-only welcome message with an image',
      'A countdown to the end of a flash sale that ticks every second',
    ],
    closer: 'You can run all of them at once.',
  },

  screenshots: [
    {
      alt: 'Storefront countdown banner with pulsing CTA',
    },
    {
      alt: 'Free-shipping progress banner updating live as items are added to the cart',
    },
    {
      alt: 'Better Top Banner \u2014 back-office form with sticky live preview at the top',
    },
  ],

  pricing: {
    price: '\u20AC24.99',
    period: 'One-time payment. No subscription.',
    guarantee: '30-day money-back guarantee via Gumroad',
    includes: [
      'Full unobfuscated PHP source (AFL-3.0)',
      'Module ZIP \u2014 installs via Module Manager',
      'Back-office UI with WYSIWYG live preview',
      'All future 1.x updates, free',
      'Install + configuration documentation',
    ],
  },

  faq: [
    {
      question: 'What versions does it support?',
      answer:
        'PrestaShop 8.0.x to 8.9.x. PHP 8.1+. MySQL 5.7+. Tested on the Classic theme; works with any theme that registers the standard displayTop hook (Hummingbird, Warehouse, Transformer, custom). Not compatible with PrestaShop 1.7 or 1.6.',
    },
    {
      question: 'Will a PrestaShop minor update break it?',
      answer:
        "No core overrides, no override directory \u2014 pure hook integration. Minor-version updates won't break the module or wipe your settings.",
    },
    {
      question: 'How does the free-shipping banner know my threshold?',
      answer:
        "It reads it from your carrier preferences. No hardcoded amounts. {{price}} and {{currency}} placeholders are replaced live, and the message updates without a page reload via PrestaShop's updateCart event.",
    },
    {
      question: 'Can I run more than one banner at once?',
      answer:
        'Yes. Stack as many as you want, drag-and-drop to reorder. Each can be enabled or disabled without deleting. Status badges show what is Live, Scheduled, Expired, or Inactive.',
    },
    {
      question: 'Multi-store and multi-language?',
      answer:
        'Per-shop scoping and per-language text fields. Full PrestaShop translation support out of the box.',
    },
    {
      question: "What's the performance cost?",
      answer:
        'One optimised database query per page. Vanilla JavaScript on the storefront \u2014 no jQuery dependency.',
    },
  ],

  ctaBanner: {
    headline: 'Drop it in. Configure it once. Forget it.',
    subline: 'One-time \u20AC24.99. Full PHP source. PrestaShop 8.0+',
  },

  meta: {
    title:
      'Better Top Banner \u2014 Promobar, countdown, free shipping for PrestaShop 8',
    description:
      'Sitewide promobar for PrestaShop 8 with countdown timers, scheduled sales, live free-shipping progress, and per-page targeting. One-time \u20AC24.99. Full source.',
  },
};

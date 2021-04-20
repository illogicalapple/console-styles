# console-styles
Easily style boring text in the console.
## How to use:
Use `console.style(text, css).go();` to log some text with some styling.  
Use `.join(moretext)` to join some text to that (with the same styling).  
Use `.join(text, css)` to join some text (with different styles).  
Use `.applyStyle(css)` to add some styling.  
You can chain those like this: `console.style(text, css).join(moretext, morecss).join(evenmoretext, evenmorecss).applyStyle(stylez).join(somuchtext).go();`.

I hope you have fun making the console full of random junk!

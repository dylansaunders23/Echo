test('is 1 + 1 = 2?', function () {
    expect(1 + 1).toBe(2);
});
export {};
// Notice: we're testing the keypress handler's effect on state and /nothing else/
//  We're not actually pressing keys!
//  We're not looking at what the console produces!
// test('handleKeypress counting', () => {    
//   main.handleKeypress(new KeyboardEvent("keypress", {key: "x"}))
//   expect(main.getPressCount()).toBe(1)
//   main.handleKeypress(new KeyboardEvent("keypress", {key: "y"}))
//   expect(main.getPressCount()).toBe(2)
// })
// test('handleMouseClick counting', () => {    
//   main.handleButtonClick(new MouseEvent("mouseclick"))
//   expect(main.getClickCount()).toBe(1)
//   main.handleButtonClick(new MouseEvent("mouseclick"))
//   expect(main.getClickCount()).toBe(2)
// })
// test('handleSentence', () => {
//     main.handle_sentence("mode")
//     expect(main.output)
// }
// )

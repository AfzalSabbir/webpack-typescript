(()=>{"use strict";var __webpack_modules__={241:(__unused_webpack_module,exports)=>{eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.formData = void 0;\r\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll('input, select, textarea');\r\n    let values = {};\r\n    // @ts-ignore\r\n    inputs.forEach((input) => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\nexports.formData = formData;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQxLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2hFLElBQUksTUFBTSxHQUE4QixFQUFFLENBQUM7SUFFM0MsYUFBYTtJQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVPLDRCQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC13ZWJwYWNrLy4vc3JjL2Zvcm1zLnRzPzUwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybURhdGEgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XHJcbiAgICBsZXQgdmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IHtmb3JtRGF0YX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///241\n")},607:(__unused_webpack_module,exports,__webpack_require__)=>{eval("var __webpack_unused_export__;\n\r\n__webpack_unused_export__ = ({ value: true });\r\nconst forms_1 = __webpack_require__(241);\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let data = (0, forms_1.formData)(form);\r\n    console.log(data);\r\n});\r\nconst person = {};\r\nconst message = 'Hello World';\r\nconsole.log(message, 'from TypeScript');\r\nconsole.log(person.speak());\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA3LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFpQztBQUVqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsSUFBSSxJQUFJLEdBQUcsb0JBQVEsRUFBQyxJQUFJLENBQUM7SUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sTUFBTSxHQUFRLEVBQUU7QUFDdEIsTUFBTSxPQUFPLEdBQVcsYUFBYSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtd2VicGFjay8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9ybURhdGF9IGZyb20gJy4vZm9ybXMnO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSE7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZGF0YSA9IGZvcm1EYXRhKGZvcm0pXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbn0pO1xyXG5cclxuY29uc3QgcGVyc29uOiBhbnkgPSB7fVxyXG5jb25zdCBtZXNzYWdlOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQnO1xyXG5jb25zb2xlLmxvZyhtZXNzYWdlLCAnZnJvbSBUeXBlU2NyaXB0Jyk7XHJcbmNvbnNvbGUubG9nKHBlcnNvbi5zcGVhaygpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///607\n")}},__webpack_module_cache__={};function __webpack_require__(Q){var e=__webpack_module_cache__[Q];if(void 0!==e)return e.exports;var F=__webpack_module_cache__[Q]={exports:{}};return __webpack_modules__[Q](F,F.exports,__webpack_require__),F.exports}var __webpack_exports__=__webpack_require__(607)})();
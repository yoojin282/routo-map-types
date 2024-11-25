# routo-map-types

TypeScript Definitions for routo.maps.\*

## 목적

Routo Map Api 는 React 컴포넌트가 존재하지 않아 여기저기 참조해서 타입 정의를 만들어 보았습니다.
아직 기본작동만 가능한 정도고 추가기능은 추후 작업 예정입니다.

## 사용법

이 패키지는 타입 정의만 포함하고 있습니다. 실제 구현은 Routo Map WebJS 지도 API를 불러와야 합니다.

[Routo 지도 WebJS 사용법](https://www.routo.com/developers/web_js/start.html)

```html
<script
  type="text/javascript"
  src="https://api.routo.com/v2/maps/map?key=[발급받은 API KEY]"
></script>
```

그리고 package.json에 devDependencies로 추가합니다.

```bash
# npm
$ npm install @yoojin282/routo-map-types --save-dev
```

그리고 tsconfig.json의 `compilerOptions.types` 속성에 패키지를 추가하시면 됩니다.

```js
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "@yoojin282/routo-map-types"
    ]
  }
}
```

## 저작권과 라이선스

- API 명세는 현대오토에버㈜ 소유입니다.

## React 컴포넌트

- [react-routo-map](https://github.com/yoojin282/react-routo-map)

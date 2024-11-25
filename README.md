# routo.maps.d.ts

TypeScript Definitions for routo.maps.\*

## 목적

Routo Map Api 는 React 컴포넌트가 존재하지 않아 여기저기 참조해서 타입 정의를 만들어 보았습니다.

**`daum map` 에서 `kakao map` 으로 변경되었지만 업데이트가 없어서 [JaeSeoKim](https://github.com/jaeSeoKim/)이 다시 공유해드립니다.**

## 사용법

이 패키지는 타입 정의만 포함하고 있습니다. 실제 구현은 Routo Map api 지도 API를 불러와야 합니다.

[Routo 지도 Web API 사용법](https://www.routo.com/developers/web_js/start.html)

```html
<script
  type="text/javascript"
  src="https://api.routo.com/v2/maps/map?key=[발급받은 API KEY]"
></script>
```

그리고 package.json에 devDependencies로 추가합니다.

```bash
# npm
$ npm install @yoojin282/routo.maps.d.ts --save-dev
```

그리고 tsconfig.json의 `compilerOptions.types` 속성에 패키지를 추가하시면 됩니다.

```js
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "@yoojin282/kakao.maps.d.ts"
    ]
  }
}
```

## 기여하기

아직 Kakao(구 Daum) 지도 Web API를 100% 정의하지 못했습니다.

필요한 부분을 보완해서 Pull Request를 보내주시면 같이 잘 쓰도록 하겠습니다.

## 저작권과 라이선스

- API 명세는 카카오 소유입니다.
- MIT 라이선스로 제공되니 알아서 잘 쓰시고, 웬만하면 여기에 공유해서 같이 쓰도록 합시다.

## 형제 오픈소스 프로젝트

- [react-kakao-maps-sdk](https://github.com/JaeSeoKim/react-kakao-maps-sdk)

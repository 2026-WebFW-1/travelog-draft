# 기여 가이드

> 작업을 시작하기 전에 꼭 읽어 주세요. 여기에는 핵심 요약만 있고, 자세한 규칙은 아래 문서에 있어요.
>
> - 📖 [Git 규칙](docs/GIT_CONVENTION.md): 브랜치, 커밋, PR
> - 📖 [코드 컨벤션](docs/CODE_CONVENTION.md): 폴더 구조, 이름 규칙, 컴포넌트·상태·스타일

## 처음 세팅하기

### 1. Node 26 설치

Node 버전은 `.nvmrc`에 적혀 있어요. [nvm](https://github.com/nvm-sh/nvm)을 쓰면 프로젝트 폴더에서 아래 명령으로 맞출 수 있어요.

```bash
nvm install
nvm use
```

### 2. pnpm 설치

패키지 매니저는 **pnpm**을 써요. 컴퓨터에 한 번만 설치하면 돼요.

```bash
npm install -g pnpm
```

설치한 pnpm 버전이 달라도 괜찮아요. 프로젝트 안에서는 `package.json`에 고정된 버전(12.9.1)을 자동으로 받아서 실행해요.

> `npm install`은 에러가 나도록 막혀 있어요. 패키지 설치와 실행은 항상 `pnpm`으로 해 주세요.

### 3. 패키지 설치하고 실행

```bash
pnpm install
pnpm dev
```

### 4. VS Code 확장 설치

프로젝트를 열면 **ESLint**, **Prettier**, **Tailwind CSS IntelliSense** 확장 설치를 추천하는 알림이 떠요. 설치하면 저장할 때 자동으로 포맷과 Tailwind 클래스 순서가 맞춰지고, 고칠 수 있는 린트 오류도 고쳐져요. Tailwind 클래스는 자동완성도 돼요.

### 자주 쓰는 명령어

| 명령어            | 하는 일                            |
| ----------------- | ---------------------------------- |
| `pnpm dev`        | 개발 서버 실행                     |
| `pnpm build`      | 배포용 빌드 (`dist/`)              |
| `pnpm lint`       | ESLint 검사. CI에서도 실행돼요     |
| `pnpm format`     | 모든 파일을 Prettier로 포맷        |
| `pnpm add 패키지` | 패키지 추가 (`-D`를 붙이면 개발용) |

## 작업 흐름

```
이슈 만들기 → 브랜치 만들기 → 작업·커밋 → PR 올리기 → Squash merge → 브랜치 삭제
```

1. **이슈 만들기**: Issues → New issue에서 기능 / 버그 / 작업 중 하나를 골라 작성해요.
2. **브랜치 만들기**: 항상 최신 `main`에서 만들어요.

   ```bash
   git switch main
   git pull origin main
   git switch -c feat/#12-map-route
   ```

3. **커밋하고 push**한 뒤 GitHub에서 PR을 만들어요.
4. **머지 조건**을 만족하면 PR을 올린 사람이 직접 **Squash and merge** 하고 브랜치를 삭제해요.

## 형식 한눈에 보기

| 대상    | 형식                  | 예시                                      |
| ------- | --------------------- | ----------------------------------------- |
| 브랜치  | `타입/#이슈번호-설명` | `feat/#12-map-route`                      |
| 커밋    | `타입: 제목`          | `feat: 지도 이동 경로 애니메이션 추가`    |
| PR 제목 | 커밋과 같음           | `fix: HEIC 사진 날짜를 못 읽는 문제 수정` |

### 타입

| 타입       | 언제                              |
| ---------- | --------------------------------- |
| `feat`     | 새 기능                           |
| `fix`      | 버그 수정                         |
| `design`   | 화면 디자인(CSS, 레이아웃) 변경   |
| `refactor` | 동작은 그대로, 코드 구조 개선     |
| `style`    | 코드 포맷만 변경 (화면 변화 없음) |
| `docs`     | 문서                              |
| `test`     | 테스트                            |
| `chore`    | 패키지 설치, 설정 등 기타         |

## 머지 조건

- [ ] CI(lint, 빌드) 통과
- [ ] `main`과 충돌 없음

## 하지 말아야 할 것

- `main`에 직접 push
- `git push --force`
- `.env`, `node_modules`, `dist`, `.DS_Store` 커밋
- `npm install` 사용 (`pnpm`만 사용해요)
- 원본 사진 커밋 (WebP로 변환, 1장당 500KB 이하로)
- 이슈 없이 작업 시작

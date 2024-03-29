# 건강 관리 캘린더

## 1. 목표와 기능awd

### 1.1 목표awd

- 그날 했던 운동을 입력하여서 조언받는 캘린더

### 1.2 기능

- 메모가 가능한 캘린더 기능
- 주간 운동 패턴 확인 기능
- 운동 조언 챗봇 기능

## 2. 개발 환경 및 배포 URL

### 2.1 개발 환경
- 사용 툴
    - VSCode
- 사용 언어
    - HTML
    - CSS
    - JS
- 서비스 배포
    - GitHub Pages


### 2.2 배포 URL

https://alsrb6013.github.io/project_1_orm/

## 3. 요구사항 명세와 기능 명세
```mermaid
    sequenceDiagram
    actor 사용자 as 사용자
    participant 캘린더 as 캘린더
    participant 데이터베이스 as 데이터베이스
    participant API as chatGPT

    사용자->>캘린더: 운동 기록
    캘린더->>데이터베이스: 운동 기록 저장
    데이터베이스->>사용자: 운동 기록 출력
    Note over 사용자,데이터베이스: 입력 데이터 확인
    캘린더-->>사용자: 입력 데이터 없음
    사용자->>캘린더: 운동 조언 챗봇 사용
    캘린더->>API: 입력 데이터 전송
    API->>캘린더: 운동 조언 답변 생성 후 전달
    캘린더->>사용자: 답변 출력
    사용자-->>캘린더: 추가 질문 있음
    Note over 사용자, 캘린더: 과정 반복
```

## 4. 프로젝트 구조와 개발 일정

### 4.1 프로젝트 구조

```
📦Health_Calender
 ┣ 📜index.html
 ┣ 📜script.js
 ┗ 📜style.css
```

### 4.2 개발 일정(WBS)
* 아래 일정표는 머메이드로 작성했습니다.
```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       건강 관리 캘린더

    section 기획
    프로젝트 기획                    :          cal1, 2024-02-13, 3h
    주요 기능 구상                   :          cal2, after cal1, 3h

    section 디자인
    리디자인                         :          cal3, 2024-02-15, 6h

    section 프론트엔드 개발
    메인                             :         cal4, after cal2, 4h
    로그인 기능                       :         cal5, after cal4, 4h
    캘린더 기능                       :         cal6, after cal5, 3h
    운동 기록 기능                    :         cal7, after cal5, 5h
    주간 운동 패턴 시각화 기능         :         cal8, 2024-02-14, 3h
    운동 조언 챗봇 기능               :         cal9, 2024-02-14, 6h
    리디자인 반영                     :         cal10, after cal8, 6h

    section 백엔드 개발
    프론트엔드와 통합                 :          cal11, 2024-02-15, 6h

    section 최종 조정 및 발표 준비
    사이트 전체 검토 및 테스트        :         cal12, after cal11, 3h
    마지막 조정 및 버그 수정          :         cal13, after cal12, 3h
    프로젝트 발표 준비                :         cal14, after cal13, 3h

    section 프로젝트 발표
    프로젝트 발표                     :         a1, 2024-02-16, 6h
```
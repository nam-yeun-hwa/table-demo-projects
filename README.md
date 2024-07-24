# table-demo-project
next.js를 이용하여 테이블 컴포넌트를 만들어 보도록 한다.

1. 컨셉 테이블 라이브러리
</br> https://www.mantine-react-table.com/docs/examples/basic 
3. 프론트엔드는 NextJs 사용
4. 트러블슈팅을 기록
5. 전반적인 경험을 기록
  

# 기술 스택
- next.js 14.0.4
- typescript
- Zustand


# 폴더구조

<pre>
├── public
└── src
    └── app
         ├── _components --- 공통컴포넌트 
         └── (layoutCase) --- 레이아웃 그룹
               └── _components --- 공통컴포넌트 
                      ├── contexts --- 컨텐스트 API
                      ├── store --- redux-toolkit
               ├── @modal --- 모달
               ├── algorithm --- 페이지 카테고리
               ├── archives --- 페이지 카테고리
               ├── algorithm --- 페이지 카테고리
               ├── categories --- 페이지 카테고리
               ├── posts ---  페이지 카테고리 일반적 공통 구조 > [다이나믹라우팅 slug]에 따라 내부로 page.tsx가 더 들어 있는 정도로 차이가 있다.
               │    ├── [postid] 
               │    │      ├── page.module.css 
               │    │      ├── page.tsx 
               │    └── page.tsx 
               ├── tags --- 페이지
               └── update --- 페이지
</pre>


# Architecture 💡
(추후예정)


# Troubleshooting

## 이슈 1
```
No overload matches this call.
  Overload 1 of 2, '(o: {}): string[]', gave the following error.
    Argument of type 'T' is not assignable to parameter of type '{}'.
  Overload 2 of 2, '(o: object): string[]', gave the following error.
    Argument of type 'T' is not assignable to parameter of type 'object'.ts(2769)
BasicTypeTable.tsx(19, 40): This type parameter might need an extends {} constraint.
BasicTypeTable.tsx(19, 40): This type parameter might need an extends object constraint. 해결법이 무엇인가요
```
테이블 컴포넌트를 사용시 각각의 데이터 타입이 모두 다른 터라 T 제너릭(객체의 타입을 동적으로 설정)을 이용하기로 하고 아래와 같이 코딩 하였으나 위 오류가 발생 하였다.
```
const columns: Array<headerType> = [
  {
    accessorKey: "id",
    header: "번호",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "fullname",
    header: "이름",
  },
  {
    accessorKey: "role",
    header: "권한",
  },
];

const userData: Array<User> = [
  {
    id: 1,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 2,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 3,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 4,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 5,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 6,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 7,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 8,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 9,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
  {
    id: 10,
    email: "nyh@hanmail.net",
    fullname: "nam yeun hwa",
    role: "manager",
  },
];
```
아래 테이블은 위 데이터를 Props로 받고 있다.
```
export default function BasicTypeTable<T>({
  columns,
  data,
}: TableProps<T>) {
 
  return (
      <table>
         ...
      </table>
  );
}

```
오류 메시지에 따르면 T가 빈 객체 타입 { } 또는 object를 상속하도록 명시하라는 내용으로 해결 방법은 T 타입 <b>매개변수에 제약 조건을 추가</b>해 주도록 하였다.

```
export default function BasicTypeTable<T extends { [key: string]: any }>({
  columns,
  data,
}: TableProps<T>) {
  useEffect(() => {
    console.log(columns, data);
  }, [columns, data]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((v) => {
              return <th key={v.accessorKey}>{v.header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((v, key) => {
            return (
              <tr key={key}>
                {Object.entries(v).map(([key, value]) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
```
위 내용을 참고하여 타입 매개변수 T는 제네릭 타입으로, 이 제네릭 타입 T는 객체 타입이어야 하며, 그 객체는 <b>문자열 키와 임의의 값(any)을 가지는 프로퍼티를 포함</b>하도록 수정해 주었다.

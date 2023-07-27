import React from 'react';

function MyComponent(props: { type: boolean, userId: number }){
    return null;
}

class MyClassComponent extends React.Component<{ data: Array<number>, handleChange: (a: number) => number }>{
}

type PropsFrom<T> = T extends React.FC<infer Props> ? Props : T extends React.Component<infer Props> ? Props : never;

const props: PropsFrom<typeof MyComponent> = {
    type: true,
    userId: 34
}

const props2: PropsFrom<MyClassComponent> = {
    data: [1],
    handleChange: (a: number) => a
}

const props3: Partial<PropsFrom<MyClassComponent>> = {
    data: [1],
    // handleChange: (a: number) => a
}


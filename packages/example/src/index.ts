import path from 'path';

interface Params {
  a: string;
};

function b({ a }: Params): void {
  console.log(path.resolve(__dirname));
}

b({ a: 'test' });
export interface IConfigProps {
  menu: IPageProps[];
  author: string;
}

export interface IPageProps {
  id: number;
  name: string;
  url: string;
}

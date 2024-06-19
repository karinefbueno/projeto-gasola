
export type ButtonProps = {
  text: string;
  onclick: () =>void;
};

export type ReposProps = {
id: string;
login: string;
avatar_url: string;
html_url: string,
}

export type DataProps = 
 [
id: string,
owner :{
login: string;
avatar_url: string;
html_url: string,
}
]


export type UserProps = {
name: string;
id:string;  
location: string | null;
login: string;
avatar_url: string;
public_repos: string;
followers: string;
following: string;
created_at: string;
heartChecked?:string;
heartEmpty?:string,
html_url: string,
isFavorite: boolean,
}

export type FavoriteProps = {
id:string;  
name: string | null
login: string;
avatarUrl: string;
htmlUrl: string,
}

export type BodyType= {
id:string;  
name: string | null
login: string;
avatar_url: string;
html_url: string,
}

export type HeaderProps ={
  text:string,
  href:string,
}
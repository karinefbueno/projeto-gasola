
export type ButtonProps = {
  text: string;
  onclick: () =>void;
};

export type ReposProps = {
id: string;
// name: string;
owner :{
avatar_url: string;
html_url: string;
login: string;
}
// followers_url: string;
// following_url: string;
// created_at: string;
}

export type UserProps = {
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

}
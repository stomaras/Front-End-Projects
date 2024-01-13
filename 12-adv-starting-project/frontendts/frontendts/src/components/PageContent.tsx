import classes from './PageContent.module.css';

export interface PageContentProps {
    title:string;
    children:any;
}

function PageContent({ title, children }:PageContentProps) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageContent;
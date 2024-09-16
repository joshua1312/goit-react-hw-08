import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
        <>
            <DocumentTitle>Home</DocumentTitle>

            <div className={css.sectionHome}>
                <h1 className={css.titleHome}>
                    Contacts manager welcome page{' '}
                </h1>
            </div>
        </>
    );
}
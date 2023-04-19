import { LinkList } from '../Lists/LinkList';
import CreaturesNFPageList from '../Lists/CreaturesNFPageList';

export function CreaturesNFPage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <CreaturesNFPageList />
            </div>
    )
}
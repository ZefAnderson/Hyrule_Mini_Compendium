import { LinkList } from '../Lists/LinkList';
import MonstersPageList from '../Lists/MonstersPageList';

export function MonstersPage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <MonstersPageList />
            </div>
    )
}
import { LinkList } from '../Lists/LinkList';
import CreaturesFPageList from '../Lists/CreaturesFPageList';

export function CreaturesFPage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <CreaturesFPageList />
            </div>
    )
}
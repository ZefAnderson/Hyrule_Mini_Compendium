import { LinkList } from '../Lists/LinkList';
import MaterialsPageList from '../Lists/MaterialsPageList';

export function MaterialsPage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <MaterialsPageList />
            </div>
    )
}
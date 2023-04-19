import EquipmentPageList from '../Lists/EquipmentPageList';
import { LinkList } from '../Lists/LinkList';

export function EquipmentPage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <EquipmentPageList />
            </div>
    )
}
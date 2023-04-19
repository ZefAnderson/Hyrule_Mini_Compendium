import { LinkList } from '../Lists/LinkList';
import HyruleList from '../Lists/HyruleList'

export function HomePage() {
    return (
            <div className="App">
                <header className="App-header">
                    Hyrule Mini Compendium
                </header>
                <LinkList />
                <HyruleList />
            </div>
    )
}
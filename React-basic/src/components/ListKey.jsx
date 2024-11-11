// Usage of ListItem component

// function App() {
//     const items = [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' }
//     ]
//     return <ListItem items={items} />
//   }

export function ListItem({ items }) {
    return <ul>
        {items.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
}
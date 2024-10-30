export default function SelectedProject({project}) {
    //format date
    const formattedDate = new Date(project.dueDate).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: "short",
        day: "numeric"
    });
    return (<div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
            <button className="text-stone-600 hover:text-stone-950">Delete</button>
            </div>
            <p className="mb-4 text-stone-400 whitespace-pre-wrap">{formattedDate}</p>
            <p className="">{project.description}</p>
        </header>
        TASKS
    </div>);
}
export default {
	name: "projects",
	type: "document",
	title: "Projects",
	fields: [
		{
			name: "createdAt",
			title: "Creation date",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
				calendarTodayLabel: "Today"
			}
		},
		{
			name: "title",
			type: "string",
			title: "Title"
		},
		{
			name: "description",
			title: "Description",
			type: "text"
		},
		{
			name: "category",
			type: "array",
			title: "Category",
			of: [{ type: "reference", to: { type: "category" } }]
		},
		{
			name: "stack",
			type: "array",
			title: "Stack",
			of: [{ type: "reference", to: { type: "stack" } }]
		},
		{
			name: "poster",
			title: "Poster",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			name: "images",
			title: "Gallery",
			type: "array",
			of: [{ type: "image" }]
		},
		{
			title: "Repo URL",
			name: "repoUrl",
			type: "url"
		},
		{
			title: "Live URL",
			name: "liveUrl",
			type: "url"
		}
	]
};

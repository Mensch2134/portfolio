import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

const PROJECT_QUERY = defineQuery(`*[
    _type == "project" &&
    slug.current == $slug
  ][0]{
    name,
    image,
    short_description,
    details,
    date
}`);

const customSerializers = {
    types: {
      // Customize how "block" content types (like paragraphs) are rendered
      block: (props) => {
        const { children, value } = props;
  
        // Handle paragraphs and other block types here
        if (value._type === 'block' && value.style === 'h1') {
          return <h1 className="text-3xl font-bold">{children}</h1>;
        }
        if (value._type === 'block' && value.style === 'h2') {
          return <h2 className="text-2xl font-semibold">{children}</h2>;
        }
        return <p className="text-lg">{children}</p>;  // Default to paragraphs
      },
      // Customize how lists are rendered
      list: (props) => {
        return (
          <ul className="list-disc pl-5">
            {props.children}
          </ul>
        );
      },
      // Customize ordered lists
      listItem: (props) => {
        return (
          <li className="text-lg">{props.children}</li>
        );
      },
      // Customize how each item in the ordered list is rendered (if needed)
      numberList: (props) => {
        return (
          <ol className="list-decimal pl-5">
            {props.children}
          </ol>
        );
      },
    },
    marks: {
      // Handle marks like links or other text styles if needed
      link: (props) => {
        return (
          <a
            href={props.href}
            target="_blank"
            className="text-blue-500 underline"
          >
            {props.children}
          </a>
        );
      },
    },
  };

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });

  if (!project) return notFound();

  return (
    <main className="container mx-auto p-12">
      <h1 className="text-4xl font-bold">{project.name}</h1>
      {project.date && (
        <p className="text-gray-600">{new Date(project.date).toLocaleDateString()}</p>
      )}
      {project.image?.length > 0 && (
        <Image
          src={urlFor(project.image[0])?.width(800).height(400).url() || ""}
          alt={project.name}
          width={800}
          height={400}
          className="my-4 rounded-lg"
        />
      )}
      {project.short_description && <p className="text-lg">{project.short_description}</p>}
      {project.details && <PortableText value={project.details} serializers={customSerializers} />}
    </main>
  );
}

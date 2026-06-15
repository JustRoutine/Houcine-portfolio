import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { ProjectDetail } from './ProjectDetail';

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

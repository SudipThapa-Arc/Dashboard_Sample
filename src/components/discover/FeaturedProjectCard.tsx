'use client';

import { Project, getProjectImage } from '@/lib/mock-data';
import { BadgeCheck, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedProjectCardProps {
    project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative h-[450px] w-full rounded-4xl overflow-hidden bg-black text-white isolate cursor-pointer"
        >
            {/* Background Image with Parallax Hover */}
            <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img
                    src={getProjectImage(project.type)}
                    alt="Project Cover"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 mb-4"
                >
                    <span className="px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                        Featured
                    </span>
                    <span className="px-3.5 py-1.5 bg-primary/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20">
                        {project.type}
                    </span>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight"
                >
                    {project.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-200 line-clamp-2 mb-8 max-w-2xl text-lg font-medium"
                >
                    {project.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-between border-t border-white/10 pt-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <img src="https://i.pravatar.cc/150?u=owner" className="w-10 h-10 rounded-full border-2 border-white" />
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-bold">Stellar Studio</span>
                                    <BadgeCheck className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                                </div>
                                <div className="text-xs text-gray-400">Top Rated Seller</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-medium">
                        <div className="flex items-center gap-2 group/icon">
                            <div className="p-2 rounded-full bg-white/10 group-hover/icon:bg-white/20 transition-colors">
                                <Heart className="w-5 h-5 text-white group-hover/icon:text-red-500 transition-colors" />
                            </div>
                            <span>1.2k</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-full bg-white/10">
                                <Eye className="w-5 h-5 text-white" />
                            </div>
                            <span>4.5k</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}


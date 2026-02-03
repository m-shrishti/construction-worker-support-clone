"use client";

import { useEffect, useState } from "react";
import { Mail, User, Calendar, MessageSquare, Inbox } from "lucide-react";

type Query = {
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    created_at: string;
};

export default function QueriesPage() {
    const [queries, setQueries] = useState<Query[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchQueries() {
            try {
                const res = await fetch("/api/queries");
                const data = await res.json();
                setQueries(data.data);
            } catch (error) {
                console.error("Failed to fetch queries", error);
            } finally {
                setLoading(false);
            }
        }

        fetchQueries();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="bg-[#1e3a5f] text-white py-8 px-4 shadow-lg">
                    <div className="max-w-6xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
                        <p className="text-gray-200 mt-2">Loading queries...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-[#1e3a5f] text-white py-8 px-4 shadow-lg">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                        <MessageSquare className="w-8 h-8" />
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-200 mt-2">Manage customer queries and inquiries</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-4 -mt-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1b78bc]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#1b78bc] text-white p-4 rounded-lg">
                                <Inbox className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Total Queries</p>
                                <p className="text-2xl font-bold text-[#1e3a5f]">{queries.length}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-green-500 text-white p-4 rounded-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Recent</p>
                                <p className="text-2xl font-bold text-[#1e3a5f]">
                                    {queries.filter(q => {
                                        const diff = Date.now() - new Date(q.created_at).getTime();
                                        return diff < 24 * 60 * 60 * 1000; // 24 hours
                                    }).length}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-500 text-white p-4 rounded-lg">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium">This Week</p>
                                <p className="text-2xl font-bold text-[#1e3a5f]">
                                    {queries.filter(q => {
                                        const diff = Date.now() - new Date(q.created_at).getTime();
                                        return diff < 7 * 24 * 60 * 60 * 1000; // 7 days
                                    }).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Queries List */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Submitted Queries</h2>

                {queries.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-md p-12 text-center border border-gray-200">
                        <Inbox className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">No queries found.</p>
                        <p className="text-gray-400 text-sm mt-2">Customer inquiries will appear here.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {queries.map((query) => (
                            <div
                                key={query.id}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border-l-4 border-[#1b78bc]"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                    <h2 className="text-xl font-semibold text-[#1e3a5f] flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-[#1b78bc]" />
                                        {query.subject}
                                    </h2>
                                    <span className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(query.created_at).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {query.message}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-sm">
                                        <User className="w-4 h-4 text-[#1b78bc]" />
                                        <span className="font-medium text-gray-700">Name:</span>
                                        <span className="text-gray-600">{query.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Mail className="w-4 h-4 text-[#1b78bc]" />
                                        <span className="font-medium text-gray-700">Email:</span>
                                        <a
                                            href={`mailto:${query.email}`}
                                            className="text-[#1b78bc] hover:underline"
                                        >
                                            {query.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

}
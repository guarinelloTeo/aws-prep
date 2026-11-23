export type RoadmapLevel = {
  id: string;
  level: number;
  title: string;
  color: string;
  description: string;
  topics: Topic[];
  awsRelevance?: string;
};

export type Topic = {
  title: string;
  concepts: string[];
  interviewQuestions: string[];
  practicalTips: string[];
  awsConnections?: string[];
};

export const roadmapData: RoadmapLevel[] = [
  {
    id: "basic",
    level: 1,
    title: "Basic Level",
    color: "bg-blue-500",
    description: "Foundation concepts every AI engineer must master",
    topics: [
      {
        title: "Computer Basics",
        concepts: [
          "How computers work: CPU, RAM, Storage hierarchy",
          "Binary, bits, bytes, and data representation",
          "Operating systems: processes, threads, memory management",
          "File systems and I/O operations",
          "Network basics: IP, TCP/UDP, HTTP/HTTPS"
        ],
        interviewQuestions: [
          "Explain the difference between RAM and disk storage",
          "What happens when you type a URL in a browser?",
          "How does a CPU execute instructions?",
          "Explain virtual memory and paging"
        ],
        practicalTips: [
          "Understand latency numbers: L1 cache (1ns), RAM (100ns), SSD (100μs), Network (1ms)",
          "Know when to use different storage types in production",
          "Debug performance issues by understanding resource bottlenecks"
        ]
      },
      {
        title: "Programming Fundamentals",
        concepts: [
          "Variables, data types, and type systems",
          "Control flow: if/else, loops, switch statements",
          "Functions and scope",
          "Input/Output operations",
          "Debugging and error handling"
        ],
        interviewQuestions: [
          "What's the difference between pass-by-value and pass-by-reference?",
          "Explain scope and closure in programming",
          "How do you debug a program systematically?"
        ],
        practicalTips: [
          "Let AI write boilerplate code, you focus on architecture",
          "Learn to read code faster than writing it",
          "Master one language deeply before learning others"
        ]
      },
      {
        title: "AI Introduction",
        concepts: [
          "What is AI, ML, Deep Learning? (The hierarchy)",
          "Supervised vs Unsupervised vs Reinforcement Learning",
          "Training data, models, and inference",
          "AI/ML pipeline overview",
          "Current AI landscape and applications"
        ],
        interviewQuestions: [
          "Explain the difference between AI, ML, and Deep Learning",
          "What is the difference between training and inference?",
          "Give examples of supervised and unsupervised learning problems"
        ],
        practicalTips: [
          "Focus on when to use AI vs traditional programming",
          "Understand the cost implications of training vs inference",
          "Know the limitations and biases in AI systems"
        ],
        awsConnections: [
          "AWS SageMaker: managed ML platform for training and deployment",
          "AWS Bedrock: access to foundation models (Claude, Llama, etc.)",
          "AWS Comprehend: pre-built NLP services"
        ]
      },
      {
        title: "Problem Solving",
        concepts: [
          "Breaking down complex problems",
          "Algorithm thinking and pseudocode",
          "Time and space complexity basics",
          "Pattern recognition in problems",
          "Testing and validation strategies"
        ],
        interviewQuestions: [
          "Walk me through how you would approach a new problem",
          "How do you decide between different solutions?",
          "Explain Big O notation with examples"
        ],
        practicalTips: [
          "Always clarify requirements before coding",
          "Think about edge cases and failure modes",
          "Practice explaining your thought process out loud"
        ]
      }
    ]
  },
  {
    id: "beginner",
    level: 2,
    title: "Beginner Level",
    color: "bg-green-500",
    description: "Core programming skills and tools",
    topics: [
      {
        title: "Data Structures",
        concepts: [
          "Arrays and Lists: dynamic sizing, indexing",
          "Stacks and Queues: LIFO vs FIFO",
          "Hash Tables/Dictionaries: O(1) lookups, collision handling",
          "Sets: uniqueness and set operations",
          "Strings: immutability, common operations"
        ],
        interviewQuestions: [
          "When would you use a list vs a set vs a dictionary?",
          "How does a hash table achieve O(1) lookup?",
          "Explain hash collisions and how to handle them",
          "What's the time complexity of common list operations?"
        ],
        practicalTips: [
          "Choose the right data structure for your access patterns",
          "Understand memory implications of each structure",
          "Know built-in methods and when to use them"
        ]
      },
      {
        title: "Loops and Functions",
        concepts: [
          "For loops, while loops, comprehensions",
          "Function definition and calling",
          "Parameters, arguments, default values",
          "Return values and multiple returns",
          "Recursion basics",
          "Lambda functions and anonymous functions"
        ],
        interviewQuestions: [
          "Explain the difference between parameters and arguments",
          "When would you use recursion vs iteration?",
          "What is a lambda function and when to use it?"
        ],
        practicalTips: [
          "Use comprehensions for readability (but not complex ones)",
          "Avoid deep recursion in production (stack overflow risk)",
          "Name functions clearly based on what they do"
        ]
      },
      {
        title: "Git and Version Control",
        concepts: [
          "Git basics: clone, add, commit, push, pull",
          "Branching strategies: main, feature branches",
          "Merge vs Rebase",
          "Resolving conflicts",
          "GitHub/GitLab workflows",
          ".gitignore and what not to commit"
        ],
        interviewQuestions: [
          "Explain the difference between merge and rebase",
          "How do you resolve a merge conflict?",
          "What's the difference between git pull and git fetch?",
          "Describe a good branching strategy for a team"
        ],
        practicalTips: [
          "Commit early and often with clear messages",
          "Never commit secrets or credentials",
          "Use meaningful branch names",
          "Review diffs before committing"
        ],
        awsConnections: [
          "AWS CodeCommit: managed Git repositories",
          "AWS CodePipeline: CI/CD with Git integration",
          "AWS CodeBuild: build automation from Git"
        ]
      }
    ]
  },
  {
    id: "intermediate",
    level: 3,
    title: "Intermediate Level",
    color: "bg-yellow-500",
    description: "Object-oriented programming and web technologies",
    topics: [
      {
        title: "Object-Oriented Programming",
        concepts: [
          "Classes and Objects: blueprints and instances",
          "Encapsulation: private vs public",
          "Inheritance: parent-child relationships",
          "Polymorphism: method overriding and interfaces",
          "Abstraction: hiding complexity",
          "Composition vs Inheritance"
        ],
        interviewQuestions: [
          "Explain the four pillars of OOP",
          "When would you use composition over inheritance?",
          "What are abstract classes and interfaces?",
          "Explain method overloading vs overriding"
        ],
        practicalTips: [
          "Favor composition over inheritance for flexibility",
          "Use OOP for modeling real-world entities",
          "Don't over-engineer with unnecessary classes"
        ]
      },
      {
        title: "APIs and Web Services",
        concepts: [
          "REST API principles: GET, POST, PUT, DELETE",
          "HTTP status codes: 2xx, 4xx, 5xx",
          "JSON data format",
          "API authentication: API keys, OAuth, JWT",
          "Rate limiting and throttling",
          "API versioning"
        ],
        interviewQuestions: [
          "What is REST and what are its constraints?",
          "Explain the difference between PUT and PATCH",
          "How would you secure an API?",
          "What's the difference between authentication and authorization?"
        ],
        practicalTips: [
          "Always handle API errors gracefully",
          "Implement retry logic with exponential backoff",
          "Use API documentation tools like Swagger/OpenAPI",
          "Monitor API usage and costs"
        ],
        awsConnections: [
          "AWS API Gateway: create, publish, and manage APIs",
          "AWS Lambda: serverless API backends",
          "AWS Cognito: user authentication for APIs",
          "AWS WAF: API security and rate limiting"
        ]
      },
      {
        title: "Web Scraping",
        concepts: [
          "HTML structure: tags, classes, IDs",
          "CSS selectors and XPath",
          "HTTP requests and responses",
          "Parsing HTML with BeautifulSoup/Cheerio",
          "Handling dynamic content (JavaScript)",
          "Ethics and robots.txt"
        ],
        interviewQuestions: [
          "How do you scrape a website with JavaScript-rendered content?",
          "What are the legal and ethical considerations of web scraping?",
          "How do you handle rate limiting when scraping?"
        ],
        practicalTips: [
          "Always check robots.txt and terms of service",
          "Use APIs when available instead of scraping",
          "Implement delays to be respectful to servers",
          "Handle errors and retries for reliability"
        ]
      }
    ]
  },
  {
    id: "advanced",
    level: 4,
    title: "Advanced Level",
    color: "bg-red-500",
    description: "System design and cloud infrastructure",
    awsRelevance: "Critical for AWS roles - this is where cloud expertise shines",
    topics: [
      {
        title: "System Design",
        concepts: [
          "Scalability: horizontal vs vertical scaling",
          "Load balancing strategies",
          "Caching layers: CDN, application, database",
          "Database sharding and replication",
          "Microservices vs Monolithic architecture",
          "Message queues and event-driven architecture",
          "CAP theorem and trade-offs"
        ],
        interviewQuestions: [
          "Design a URL shortener service",
          "How would you design Twitter/Instagram?",
          "Explain the CAP theorem with real examples",
          "How do you handle 10x traffic growth?",
          "What's the difference between consistency and availability?"
        ],
        practicalTips: [
          "Always ask about scale, users, and latency requirements",
          "Draw diagrams to explain your design",
          "Consider cost implications of your choices",
          "Think about failure modes and monitoring"
        ],
        awsConnections: [
          "AWS ELB: Elastic Load Balancing",
          "AWS Auto Scaling: automatic horizontal scaling",
          "AWS CloudFront: CDN for global content delivery",
          "AWS ElastiCache: Redis/Memcached caching",
          "AWS RDS: managed relational databases with read replicas",
          "AWS SQS/SNS: message queues and pub/sub",
          "AWS Step Functions: workflow orchestration"
        ]
      },
      {
        title: "Cloud Platforms (AWS Focus)",
        concepts: [
          "Compute: EC2, Lambda, ECS/EKS, Fargate",
          "Storage: S3, EBS, EFS, Glacier",
          "Networking: VPC, subnets, security groups, NAT",
          "Databases: RDS, DynamoDB, Aurora, Redshift",
          "IAM: users, roles, policies, least privilege",
          "Cost optimization and billing",
          "Well-Architected Framework: 6 pillars"
        ],
        interviewQuestions: [
          "When would you use EC2 vs Lambda vs Fargate?",
          "Explain the difference between S3 storage classes",
          "How does AWS IAM work? Explain roles vs users",
          "What is a VPC and why do you need it?",
          "How do you optimize AWS costs?",
          "Explain the AWS Well-Architected Framework"
        ],
        practicalTips: [
          "Start with serverless (Lambda) for new projects - lowest operational overhead",
          "Use S3 for all file storage needs",
          "Always tag resources for cost tracking",
          "Use CloudFormation/Terraform for infrastructure as code",
          "Enable CloudWatch for monitoring from day one",
          "Understand the shared responsibility model"
        ],
        awsConnections: [
          "AWS SageMaker: ML model training and deployment",
          "AWS Bedrock: access to LLMs (Claude, Llama, Titan)",
          "AWS Lambda: run inference code serverlessly",
          "AWS S3: store training data and models",
          "AWS ECR: container registry for ML containers"
        ]
      },
      {
        title: "Docker and Kubernetes",
        concepts: [
          "Containers vs VMs",
          "Docker images and Dockerfiles",
          "Container registries (ECR, Docker Hub)",
          "Docker Compose for multi-container apps",
          "Kubernetes basics: pods, deployments, services",
          "K8s scaling and self-healing",
          "Helm charts for K8s deployments"
        ],
        interviewQuestions: [
          "Explain the difference between containers and VMs",
          "What is a Dockerfile and what goes in it?",
          "When would you use Kubernetes vs just Docker?",
          "How does Kubernetes achieve high availability?",
          "Explain pods, deployments, and services in K8s"
        ],
        practicalTips: [
          "Use multi-stage Dockerfiles to reduce image size",
          "Never put secrets in Docker images",
          "For AWS: use ECS/Fargate before jumping to EKS",
          "Container orchestration adds complexity - only use when needed"
        ],
        awsConnections: [
          "AWS ECS: managed Docker container orchestration",
          "AWS EKS: managed Kubernetes service",
          "AWS Fargate: serverless containers",
          "AWS ECR: private Docker registry",
          "AWS App Runner: easiest container deployment"
        ]
      }
    ]
  },
  {
    id: "database",
    level: 5,
    title: "Database Development",
    color: "bg-purple-500",
    description: "Data storage and retrieval systems",
    topics: [
      {
        title: "SQL Databases",
        concepts: [
          "Relational model: tables, rows, columns",
          "Primary keys and foreign keys",
          "SQL queries: SELECT, JOIN, WHERE, GROUP BY",
          "Indexes and query optimization",
          "ACID properties: Atomicity, Consistency, Isolation, Durability",
          "Normalization and denormalization",
          "Transactions and locks"
        ],
        interviewQuestions: [
          "Explain the different types of JOINs",
          "What is an index and how does it improve performance?",
          "Explain ACID properties with examples",
          "When would you denormalize a database?",
          "What's the difference between DELETE and TRUNCATE?"
        ],
        practicalTips: [
          "Index columns used in WHERE and JOIN clauses",
          "Avoid SELECT * in production queries",
          "Use connection pooling for better performance",
          "Monitor slow queries and optimize them"
        ],
        awsConnections: [
          "AWS RDS: managed PostgreSQL, MySQL, MariaDB, Oracle, SQL Server",
          "AWS Aurora: high-performance MySQL/PostgreSQL compatible",
          "AWS Aurora Serverless: auto-scaling database"
        ]
      },
      {
        title: "NoSQL Databases",
        concepts: [
          "Document stores: MongoDB, DocumentDB",
          "Key-value stores: DynamoDB, Redis",
          "Column-family: Cassandra",
          "Graph databases: Neo4j, Neptune",
          "CAP theorem in NoSQL",
          "Eventual consistency vs strong consistency",
          "When to use NoSQL vs SQL"
        ],
        interviewQuestions: [
          "When would you choose NoSQL over SQL?",
          "Explain eventual consistency",
          "What are the trade-offs of using DynamoDB?",
          "How do you model relationships in a document database?"
        ],
        practicalTips: [
          "NoSQL is not schema-less, it's schema-flexible",
          "Design NoSQL schemas based on access patterns, not entities",
          "DynamoDB is excellent for key-value and simple queries",
          "MongoDB is better for complex queries and aggregations"
        ],
        awsConnections: [
          "AWS DynamoDB: serverless NoSQL, single-digit ms latency",
          "AWS DocumentDB: MongoDB-compatible document database",
          "AWS Neptune: graph database for connected data",
          "AWS ElastiCache: Redis/Memcached for caching",
          "AWS Timestream: time-series database"
        ]
      },
      {
        title: "Database Design",
        concepts: [
          "Schema design principles",
          "Data modeling: entities, relationships",
          "Partitioning and sharding strategies",
          "Backup and disaster recovery",
          "Read replicas and multi-region setups",
          "Data migration strategies"
        ],
        interviewQuestions: [
          "How would you design a database for a social network?",
          "Explain database sharding and when to use it",
          "How do you handle database migrations in production?"
        ],
        practicalTips: [
          "Design for your read/write patterns",
          "Start with a monolithic database, shard only when needed",
          "Always have automated backups",
          "Test your disaster recovery procedures"
        ]
      }
    ]
  },
  {
    id: "data-science",
    level: 6,
    title: "Data Science",
    color: "bg-cyan-500",
    description: "Data analysis and manipulation",
    topics: [
      {
        title: "NumPy",
        concepts: [
          "NumPy arrays: ndarray basics",
          "Array operations: vectorization",
          "Broadcasting rules",
          "Linear algebra operations",
          "Random number generation",
          "Performance advantages over Python lists"
        ],
        interviewQuestions: [
          "What is broadcasting in NumPy?",
          "Why is NumPy faster than Python lists?",
          "Explain vectorization with an example"
        ],
        practicalTips: [
          "Always use NumPy for numerical operations - it's 10-100x faster",
          "Vectorize operations instead of loops",
          "Understand memory layout for performance"
        ]
      },
      {
        title: "Pandas",
        concepts: [
          "DataFrames and Series",
          "Data loading: CSV, JSON, SQL",
          "Data cleaning: handling missing values, duplicates",
          "Filtering, sorting, grouping",
          "Merging and joining datasets",
          "Time series operations",
          "Aggregation and pivot tables"
        ],
        interviewQuestions: [
          "What's the difference between loc and iloc?",
          "How do you handle missing data in Pandas?",
          "Explain groupby operations",
          "How do you merge two DataFrames?"
        ],
        practicalTips: [
          "Use vectorized operations, avoid iterrows()",
          "Profile memory usage for large datasets",
          "Use chunks for data that doesn't fit in memory",
          "Master boolean indexing for filtering"
        ]
      },
      {
        title: "Data Visualization",
        concepts: [
          "Matplotlib: plots, subplots, customization",
          "Seaborn: statistical visualizations",
          "Chart types: line, bar, scatter, histogram, heatmap",
          "Color theory and accessibility",
          "Plotly for interactive visualizations"
        ],
        interviewQuestions: [
          "Which visualization would you use for showing distribution?",
          "How do you make visualizations accessible?",
          "Explain when to use scatter plot vs line plot"
        ],
        practicalTips: [
          "Choose the right chart type for your data",
          "Always label axes and add titles",
          "Use color purposefully, not randomly",
          "Consider your audience's technical level"
        ]
      },
      {
        title: "Statistics and EDA",
        concepts: [
          "Descriptive statistics: mean, median, mode, std dev",
          "Probability distributions: normal, binomial",
          "Hypothesis testing basics",
          "Correlation vs causation",
          "Exploratory Data Analysis workflow",
          "Outlier detection and handling"
        ],
        interviewQuestions: [
          "Explain correlation vs causation with examples",
          "What is a p-value?",
          "How do you detect and handle outliers?",
          "What's the difference between mean and median?"
        ],
        practicalTips: [
          "Always visualize your data before modeling",
          "Check for data quality issues early",
          "Document your EDA findings",
          "Look for patterns, anomalies, and biases"
        ]
      }
    ]
  },
  {
    id: "machine-learning",
    level: 7,
    title: "Machine Learning",
    color: "bg-orange-500",
    description: "Classical ML algorithms and techniques",
    topics: [
      {
        title: "Supervised Learning",
        concepts: [
          "Linear Regression: predicting continuous values",
          "Logistic Regression: binary and multi-class classification",
          "Decision Trees: interpretable models",
          "Random Forests: ensemble of trees",
          "Support Vector Machines (SVM)",
          "Gradient Boosting: XGBoost, LightGBM",
          "Model evaluation: accuracy, precision, recall, F1, ROC-AUC"
        ],
        interviewQuestions: [
          "Explain bias-variance tradeoff",
          "When would you use logistic regression vs decision trees?",
          "What is overfitting and how do you prevent it?",
          "Explain precision vs recall with examples",
          "How does Random Forest prevent overfitting?"
        ],
        practicalTips: [
          "Start with simple models (linear/logistic regression)",
          "Always split data: train/validation/test",
          "Cross-validation for robust evaluation",
          "Feature engineering often beats complex models"
        ],
        awsConnections: [
          "AWS SageMaker: built-in algorithms for supervised learning",
          "AWS SageMaker Autopilot: automated ML model building",
          "AWS SageMaker Training: distributed training jobs"
        ]
      },
      {
        title: "Unsupervised Learning",
        concepts: [
          "K-Means clustering: grouping similar items",
          "Hierarchical clustering",
          "DBSCAN: density-based clustering",
          "Principal Component Analysis (PCA): dimensionality reduction",
          "Anomaly detection techniques",
          "Clustering evaluation metrics"
        ],
        interviewQuestions: [
          "How does K-Means work and what are its limitations?",
          "When would you use PCA?",
          "How do you choose the number of clusters?",
          "Explain the difference between K-Means and DBSCAN"
        ],
        practicalTips: [
          "Normalize features before clustering",
          "Use elbow method or silhouette score for K selection",
          "Visualize clusters to validate results",
          "Unsupervised learning needs domain expertise to interpret"
        ]
      },
      {
        title: "Neural Networks Basics",
        concepts: [
          "Perceptron: basic building block",
          "Activation functions: ReLU, sigmoid, tanh",
          "Feedforward networks",
          "Backpropagation: how networks learn",
          "Gradient descent and optimization",
          "Loss functions: MSE, cross-entropy",
          "Regularization: L1, L2, dropout"
        ],
        interviewQuestions: [
          "Explain backpropagation in simple terms",
          "Why do we need activation functions?",
          "What is gradient descent?",
          "Explain vanishing gradient problem",
          "What's the difference between batch and stochastic gradient descent?"
        ],
        practicalTips: [
          "Use ReLU activation for hidden layers",
          "Start with small networks, add complexity as needed",
          "Monitor both training and validation loss",
          "Learning rate is the most important hyperparameter"
        ]
      },
      {
        title: "Model Evaluation & Deployment",
        concepts: [
          "Train/validation/test split",
          "Cross-validation strategies",
          "Confusion matrix and metrics",
          "Model selection criteria",
          "A/B testing for models",
          "Model versioning and monitoring",
          "Concept drift and model retraining"
        ],
        interviewQuestions: [
          "How do you evaluate a classification model?",
          "What is cross-validation and why use it?",
          "How do you detect model drift in production?",
          "Explain Type I vs Type II errors"
        ],
        practicalTips: [
          "Never tune hyperparameters on test set",
          "Monitor model performance in production",
          "Set up alerts for performance degradation",
          "Version your models and datasets"
        ],
        awsConnections: [
          "AWS SageMaker Endpoints: deploy models as REST APIs",
          "AWS SageMaker Model Monitor: detect drift",
          "AWS SageMaker Experiments: track training runs"
        ]
      }
    ]
  },
  {
    id: "deep-learning",
    level: 8,
    title: "Deep Learning",
    color: "bg-pink-500",
    description: "Advanced neural network architectures",
    topics: [
      {
        title: "Deep Learning Frameworks",
        concepts: [
          "TensorFlow vs PyTorch: when to use each",
          "Keras: high-level API",
          "Model definition and layers",
          "Training loops and callbacks",
          "GPU acceleration with CUDA",
          "Distributed training strategies",
          "Model saving and loading"
        ],
        interviewQuestions: [
          "What's the difference between TensorFlow and PyTorch?",
          "How do you leverage GPUs for training?",
          "Explain batch size and its impact on training",
          "What are callbacks and when to use them?"
        ],
        practicalTips: [
          "PyTorch is more intuitive for research, TensorFlow for production",
          "Use learning rate schedulers",
          "Save checkpoints during long training runs",
          "Monitor GPU utilization"
        ],
        awsConnections: [
          "AWS SageMaker: supports TensorFlow, PyTorch, MXNet",
          "AWS EC2 P4/P5 instances: GPU instances for training",
          "AWS Deep Learning AMIs: pre-configured environments",
          "AWS SageMaker distributed training: multi-GPU/multi-node"
        ]
      },
      {
        title: "Convolutional Neural Networks (CNNs)",
        concepts: [
          "Convolution operation and filters",
          "Pooling layers: max pooling, average pooling",
          "CNN architectures: LeNet, VGG, ResNet, EfficientNet",
          "Transfer learning: using pre-trained models",
          "Data augmentation for images",
          "Object detection: YOLO, R-CNN families",
          "Image segmentation techniques"
        ],
        interviewQuestions: [
          "How does a convolutional layer work?",
          "What is transfer learning and when to use it?",
          "Explain the difference between classification and detection",
          "How does ResNet solve vanishing gradients?",
          "What is data augmentation and why is it important?"
        ],
        practicalTips: [
          "Always use transfer learning for image tasks (ResNet, EfficientNet)",
          "Data augmentation is crucial for small datasets",
          "Start with pre-trained models, fine-tune on your data",
          "Use appropriate image preprocessing"
        ]
      },
      {
        title: "Recurrent Neural Networks (RNNs)",
        concepts: [
          "RNN architecture: sequential processing",
          "LSTM: Long Short-Term Memory",
          "GRU: Gated Recurrent Units",
          "Sequence-to-sequence models",
          "Attention mechanisms",
          "Transformers: the new paradigm",
          "Applications: time series, language modeling"
        ],
        interviewQuestions: [
          "Why do we need LSTMs instead of vanilla RNNs?",
          "Explain the LSTM cell structure",
          "What problem does attention solve?",
          "How are Transformers different from RNNs?"
        ],
        practicalTips: [
          "For most sequence tasks, use Transformers now instead of RNNs",
          "Bidirectional LSTMs capture context from both directions",
          "Watch out for exploding gradients in RNNs",
          "Sequence length affects memory usage significantly"
        ]
      }
    ]
  },
  {
    id: "computer-vision",
    level: 9,
    title: "Computer Vision",
    color: "bg-indigo-500",
    description: "Image and video processing",
    topics: [
      {
        title: "Image Processing Fundamentals",
        concepts: [
          "Image representation: pixels, channels (RGB, grayscale)",
          "Image filtering: blurring, sharpening, edge detection",
          "Morphological operations",
          "Color space conversions",
          "Histogram equalization",
          "Image transformations: rotation, scaling, cropping"
        ],
        interviewQuestions: [
          "Explain how images are represented digitally",
          "What is edge detection and how does it work?",
          "When would you convert RGB to grayscale?"
        ],
        practicalTips: [
          "OpenCV is the standard library for computer vision",
          "Resize images to reduce processing time",
          "Normalize pixel values before feeding to models"
        ]
      },
      {
        title: "OpenCV and Modern CV",
        concepts: [
          "OpenCV basics: reading, writing, displaying images",
          "Face detection with Haar Cascades",
          "Feature extraction: SIFT, SURF, ORB",
          "Object tracking algorithms",
          "Video processing frame by frame",
          "Real-time CV considerations"
        ],
        interviewQuestions: [
          "How does face detection work?",
          "What are feature descriptors used for?",
          "How do you optimize CV pipelines for real-time?"
        ],
        practicalTips: [
          "Use GPU acceleration for video processing",
          "Batch process frames when possible",
          "Consider model latency for real-time applications"
        ],
        awsConnections: [
          "AWS Rekognition: pre-built CV for face/object detection",
          "AWS Panorama: CV at the edge for video streams",
          "AWS SageMaker: deploy custom CV models"
        ]
      },
      {
        title: "Advanced Computer Vision",
        concepts: [
          "Image classification at scale",
          "Object detection: bounding boxes",
          "Instance segmentation vs semantic segmentation",
          "Pose estimation",
          "Optical Character Recognition (OCR)",
          "Generative models: GANs for images"
        ],
        interviewQuestions: [
          "Explain the difference between detection and segmentation",
          "How does YOLO achieve real-time object detection?",
          "What is OCR and what are its challenges?"
        ],
        practicalTips: [
          "Use cloud services (Rekognition, Vision AI) for common tasks",
          "Fine-tune pre-trained models instead of training from scratch",
          "Consider edge devices for latency-sensitive applications"
        ]
      }
    ]
  },
  {
    id: "nlp",
    level: 10,
    title: "Natural Language Processing",
    color: "bg-teal-500",
    description: "Text processing and language understanding",
    topics: [
      {
        title: "Text Processing",
        concepts: [
          "Tokenization: breaking text into words/subwords",
          "Stop word removal and stemming/lemmatization",
          "Regular expressions for text patterns",
          "Text normalization: lowercasing, punctuation",
          "N-grams and bag of words",
          "TF-IDF: term frequency-inverse document frequency",
          "Word embeddings: Word2Vec, GloVe"
        ],
        interviewQuestions: [
          "What is tokenization and why is it important?",
          "Explain TF-IDF and its use cases",
          "What are word embeddings?",
          "Difference between stemming and lemmatization?"
        ],
        practicalTips: [
          "Modern LLMs handle tokenization internally",
          "Use pre-trained embeddings when possible",
          "Clean text carefully - don't lose important information"
        ]
      },
      {
        title: "NLP Models and Techniques",
        concepts: [
          "Sentiment analysis: positive, negative, neutral",
          "Named Entity Recognition (NER)",
          "Part-of-speech tagging",
          "Text classification",
          "Machine translation basics",
          "Transformers: BERT, GPT architecture",
          "Attention mechanisms in NLP"
        ],
        interviewQuestions: [
          "How does sentiment analysis work?",
          "What is BERT and how is it different from GPT?",
          "Explain attention mechanism in simple terms",
          "How do you evaluate an NLP model?"
        ],
        practicalTips: [
          "Use pre-trained models (BERT, RoBERTa) and fine-tune",
          "More data beats better algorithms in NLP",
          "Consider inference latency for production"
        ],
        awsConnections: [
          "AWS Comprehend: sentiment, entities, key phrases",
          "AWS Translate: neural machine translation",
          "AWS Bedrock: access to Claude, Llama, Titan LLMs"
        ]
      },
      {
        title: "Chatbots and Conversational AI",
        concepts: [
          "Intent recognition and entity extraction",
          "Dialog management and state tracking",
          "Natural language understanding (NLU)",
          "Natural language generation (NLG)",
          "Context handling in conversations",
          "Retrieval-Augmented Generation (RAG)",
          "Prompt engineering for LLMs"
        ],
        interviewQuestions: [
          "How do chatbots understand user intent?",
          "What is RAG and when to use it?",
          "How do you handle context in conversations?",
          "Explain prompt engineering techniques"
        ],
        practicalTips: [
          "Use LLMs (GPT, Claude) for most chatbot tasks now",
          "RAG is essential for domain-specific knowledge",
          "Test with real user conversations, not synthetic data",
          "Monitor and improve based on user feedback"
        ],
        awsConnections: [
          "AWS Lex: build conversational interfaces",
          "AWS Bedrock + Knowledge Bases: RAG implementation",
          "AWS Lambda: chatbot backend logic"
        ]
      }
    ]
  },
  {
    id: "generative-ai",
    level: 11,
    title: "Generative AI",
    color: "bg-rose-500",
    description: "Large Language Models and generative systems",
    awsRelevance: "Hot area for AWS AI/ML roles - bedrock and foundation models",
    topics: [
      {
        title: "Foundation Models",
        concepts: [
          "What are LLMs: GPT, Claude, Llama, PaLM",
          "Pre-training vs fine-tuning vs prompting",
          "Transformer architecture deep dive",
          "Model sizes: parameters and compute requirements",
          "Inference costs and optimization",
          "Model capabilities and limitations",
          "Ethical considerations and biases"
        ],
        interviewQuestions: [
          "Explain how GPT models work at a high level",
          "What's the difference between GPT-3 and GPT-4?",
          "When would you fine-tune vs use prompting?",
          "What are the main challenges with LLMs?",
          "How do you evaluate LLM outputs?"
        ],
        practicalTips: [
          "Start with API access (OpenAI, Anthropic) before self-hosting",
          "Prompting often beats fine-tuning for most tasks",
          "Monitor token usage - costs can spiral",
          "Always have human review for critical outputs"
        ],
        awsConnections: [
          "AWS Bedrock: access Claude, Llama 3, Titan, Cohere, AI21",
          "AWS SageMaker JumpStart: deploy open-source models",
          "Amazon Q: AWS's own AI assistant",
          "AWS Bedrock Agents: build LLM-powered agents"
        ]
      },
      {
        title: "Prompt Engineering",
        concepts: [
          "Prompt structure: system, user, assistant messages",
          "Zero-shot, few-shot, and many-shot prompting",
          "Chain-of-thought reasoning",
          "Prompt templates and variables",
          "Temperature and sampling parameters",
          "Prompt injection and safety",
          "Evaluation and testing prompts"
        ],
        interviewQuestions: [
          "What is few-shot prompting?",
          "How does chain-of-thought improve reasoning?",
          "What is prompt injection and how to prevent it?",
          "How do you systematically improve prompts?"
        ],
        practicalTips: [
          "Be specific and provide examples in prompts",
          "Use system messages for persistent instructions",
          "Lower temperature (0.2-0.5) for factual tasks",
          "Higher temperature (0.7-1.0) for creative tasks",
          "Version control your prompts like code"
        ]
      },
      {
        title: "LangChain and LLM Applications",
        concepts: [
          "LangChain framework overview",
          "Chains: sequential LLM operations",
          "Agents: LLMs with tool use",
          "Vector databases for embeddings",
          "Retrieval-Augmented Generation (RAG) architecture",
          "Memory and context management",
          "LLM orchestration patterns"
        ],
        interviewQuestions: [
          "What problem does LangChain solve?",
          "Explain RAG architecture and components",
          "How do vector databases work?",
          "What are LLM agents and when to use them?"
        ],
        practicalTips: [
          "RAG is the most important pattern to know",
          "Use vector DBs (Pinecone, Weaviate, pgvector) for semantic search",
          "Chunk documents intelligently (not too small/large)",
          "Cache expensive LLM calls",
          "Monitor LLM costs and latency"
        ],
        awsConnections: [
          "AWS Bedrock Knowledge Bases: managed RAG",
          "AWS OpenSearch: vector search capabilities",
          "AWS Bedrock Agents: LangChain-like agent framework",
          "AWS Kendra: intelligent search with LLMs"
        ]
      },
      {
        title: "Image Generation and Multimodal",
        concepts: [
          "Stable Diffusion, DALL-E, Midjourney",
          "Text-to-image generation",
          "Image-to-image transformation",
          "ControlNet for guided generation",
          "Vision-language models: GPT-4V, Claude 3",
          "Multimodal applications"
        ],
        interviewQuestions: [
          "How do diffusion models work?",
          "What are the applications of vision-language models?",
          "How do you evaluate generated images?"
        ],
        practicalTips: [
          "Use API services for image generation initially",
          "Fine-tune Stable Diffusion for specific styles/domains",
          "Vision-language models are powerful for document understanding"
        ]
      }
    ]
  },
  {
    id: "automation",
    level: 12,
    title: "Automation",
    color: "bg-amber-500",
    description: "Automated testing and processes",
    topics: [
      {
        title: "API Automation and Testing",
        concepts: [
          "REST API testing with requests/axios",
          "API test frameworks: pytest, Jest",
          "Mocking and stubbing APIs",
          "Integration testing strategies",
          "Load testing with tools like k6",
          "API monitoring and health checks",
          "CI/CD for automated testing"
        ],
        interviewQuestions: [
          "How do you test APIs effectively?",
          "What's the difference between unit and integration tests?",
          "How do you mock external dependencies?",
          "What metrics do you track in API testing?"
        ],
        practicalTips: [
          "Write tests before deploying to production",
          "Use test environments that mirror production",
          "Automate tests in CI/CD pipeline",
          "Monitor API health continuously"
        ],
        awsConnections: [
          "AWS CodePipeline: CI/CD automation",
          "AWS CodeBuild: run tests automatically",
          "AWS CloudWatch: monitoring and alerting",
          "AWS X-Ray: distributed tracing"
        ]
      },
      {
        title: "Process Automation (RPA)",
        concepts: [
          "Robotic Process Automation basics",
          "Browser automation with Selenium/Playwright",
          "Desktop automation",
          "Workflow orchestration",
          "Error handling and retries",
          "Scheduling automated tasks"
        ],
        interviewQuestions: [
          "When would you use RPA?",
          "How do you make automation reliable?",
          "What are common RPA use cases?"
        ],
        practicalTips: [
          "RPA is for legacy systems without APIs",
          "Make automation resilient to UI changes",
          "Log everything for debugging",
          "Have human oversight for critical processes"
        ]
      },
      {
        title: "Infrastructure Automation",
        concepts: [
          "Infrastructure as Code (IaC): CloudFormation, Terraform",
          "Configuration management: Ansible, Chef",
          "Automated deployments and rollbacks",
          "Blue-green and canary deployments",
          "Monitoring and alerting automation"
        ],
        interviewQuestions: [
          "What is Infrastructure as Code?",
          "Explain blue-green deployment",
          "How do you automate rollbacks?"
        ],
        practicalTips: [
          "Version control all infrastructure code",
          "Test infrastructure changes in staging first",
          "Use IaC for all AWS resources"
        ],
        awsConnections: [
          "AWS CloudFormation: native IaC for AWS",
          "AWS CDK: define infrastructure in code",
          "AWS Systems Manager: automate operational tasks",
          "AWS Step Functions: workflow automation"
        ]
      }
    ]
  },
  {
    id: "ai-agents",
    level: 13,
    title: "AI Agents",
    color: "bg-violet-500",
    description: "Building autonomous AI systems",
    awsRelevance: "Emerging area - agents using AWS services",
    topics: [
      {
        title: "Agent Frameworks",
        concepts: [
          "LangChain agents: ReAct, Plan-and-Execute",
          "Tool use and function calling",
          "Agent memory: short-term and long-term",
          "Multi-agent systems and communication",
          "Agent orchestration patterns",
          "Autonomous task execution",
          "Safety and guardrails for agents"
        ],
        interviewQuestions: [
          "What makes an AI system an 'agent'?",
          "How do agents use tools?",
          "What are the challenges in building reliable agents?",
          "Explain multi-agent collaboration"
        ],
        practicalTips: [
          "Start simple: single agent with few tools",
          "Agents can be unreliable - add guardrails",
          "Log all agent actions for debugging",
          "Human-in-the-loop for high-stakes decisions",
          "Set clear success criteria and stopping conditions"
        ],
        awsConnections: [
          "AWS Bedrock Agents: build agents with AWS services",
          "AWS Lambda: agent action executors",
          "AWS Step Functions: agent workflow orchestration",
          "Amazon Q: example of production agent"
        ]
      },
      {
        title: "Agent Design Patterns",
        concepts: [
          "ReAct: Reasoning and Acting",
          "Chain-of-thought for complex reasoning",
          "Self-reflection and self-correction",
          "Planning and decomposition",
          "Tool selection strategies",
          "Error recovery in agents",
          "Agent evaluation frameworks"
        ],
        interviewQuestions: [
          "Explain the ReAct pattern",
          "How do you evaluate agent performance?",
          "What is self-reflection in agents?",
          "How do agents handle failures?"
        ],
        practicalTips: [
          "Break complex tasks into smaller steps",
          "Give agents ability to say 'I don't know'",
          "Monitor token usage - agents can be expensive",
          "Test edge cases and failure modes extensively"
        ]
      },
      {
        title: "Multi-Agent Systems",
        concepts: [
          "Agent roles and specialization",
          "Communication protocols between agents",
          "Coordination and collaboration",
          "Conflict resolution",
          "Hierarchical agent structures",
          "Swarm intelligence concepts"
        ],
        interviewQuestions: [
          "When would you use multiple agents vs one?",
          "How do agents communicate effectively?",
          "What are the challenges in multi-agent systems?"
        ],
        practicalTips: [
          "Use multi-agent for complex, decomposable tasks",
          "Define clear roles and responsibilities",
          "Start with 2-3 agents, not dozens",
          "More agents = more complexity and cost"
        ]
      }
    ]
  },
  {
    id: "real-projects",
    level: 14,
    title: "Real Projects",
    color: "bg-emerald-500",
    description: "Build, deploy, and maintain production systems",
    awsRelevance: "This is where you prove AWS expertise - end-to-end systems",
    topics: [
      {
        title: "Project Planning and Architecture",
        concepts: [
          "Gathering requirements from stakeholders",
          "Defining success metrics and KPIs",
          "Architecting ML systems for production",
          "Cost estimation and optimization",
          "Choosing the right AWS services",
          "Security and compliance considerations",
          "Documentation and knowledge transfer"
        ],
        interviewQuestions: [
          "Walk me through how you'd plan an ML project",
          "How do you estimate AWS costs for a new project?",
          "What security considerations are important for AI systems?",
          "How do you choose between different AWS AI services?"
        ],
        practicalTips: [
          "Start with a pilot/MVP, not the full system",
          "Get stakeholder buy-in early",
          "Document decisions and trade-offs",
          "Plan for monitoring and maintenance from day one"
        ],
        awsConnections: [
          "AWS Well-Architected Framework: design principles",
          "AWS Cost Explorer: estimate and track costs",
          "AWS Trusted Advisor: optimization recommendations"
        ]
      },
      {
        title: "Building Portfolio Projects",
        concepts: [
          "Project ideas that demonstrate skills",
          "End-to-end ML pipelines",
          "API development and deployment",
          "Frontend for demos and visualization",
          "GitHub best practices and documentation",
          "Writing about your projects (blog, README)",
          "Presenting technical work"
        ],
        interviewQuestions: [
          "Walk me through a project you built",
          "What challenges did you face and how did you solve them?",
          "How would you scale this project?",
          "What would you do differently next time?"
        ],
        practicalTips: [
          "Build projects that solve real problems",
          "Make projects publicly accessible with good UI",
          "Write excellent READMEs with screenshots/demos",
          "Deploy on AWS to show cloud skills",
          "Blog about your process and learnings"
        ]
      },
      {
        title: "Production Best Practices",
        concepts: [
          "Monitoring: metrics, logs, traces",
          "Error handling and graceful degradation",
          "Scaling: horizontal vs vertical",
          "Security: authentication, authorization, secrets",
          "Disaster recovery and backup strategies",
          "Cost optimization in production",
          "On-call and incident response",
          "Continuous improvement and iteration"
        ],
        interviewQuestions: [
          "How do you monitor an ML model in production?",
          "What happens when your system goes down?",
          "How do you handle a sudden 10x traffic spike?",
          "Explain your approach to incident response"
        ],
        practicalTips: [
          "Monitoring is not optional - set up CloudWatch",
          "Always have rollback procedures",
          "Test disaster recovery plans regularly",
          "Set up cost alerts to avoid surprises",
          "Keep improving based on production data"
        ],
        awsConnections: [
          "AWS CloudWatch: metrics, logs, alarms",
          "AWS SNS: alerts and notifications",
          "AWS Cost Anomaly Detection: prevent cost surprises",
          "AWS Systems Manager: operational management"
        ]
      },
      {
        title: "Getting Hired",
        concepts: [
          "Resume: highlighting relevant projects",
          "LinkedIn optimization for AI/ML roles",
          "Interview preparation strategies",
          "System design interviews for ML",
          "Coding interviews: data structures and algorithms",
          "Behavioral interviews: STAR method",
          "Negotiation and offer evaluation"
        ],
        interviewQuestions: [
          "Common questions covered throughout all levels above",
          "Be ready to discuss projects in depth",
          "Prepare stories for behavioral questions",
          "Practice system design on a whiteboard"
        ],
        practicalTips: [
          "Apply to many positions - it's a numbers game",
          "Network: LinkedIn, conferences, meetups",
          "Contribute to open source to build credibility",
          "Practice interviews with friends or mock services",
          "Learn from rejections and keep improving",
          "For AWS roles: get AWS certifications (Solutions Architect, ML Specialty)"
        ],
        awsConnections: [
          "AWS Certifications: Solutions Architect, ML Specialty, Security",
          "AWS Skill Builder: free training resources",
          "AWS re:Invent and regional events: networking"
        ]
      }
    ]
  }
];

export const awsSpecificResources = {
  title: "AWS AI/ML Engineer Focus",
  description: "Essential AWS services and concepts for AI/ML engineering roles",
  categories: [
    {
      title: "Core AI/ML Services",
      services: [
        {
          name: "Amazon SageMaker",
          purpose: "End-to-end ML platform",
          keyFeatures: [
            "Built-in algorithms and frameworks (TensorFlow, PyTorch, XGBoost)",
            "Notebook instances for development",
            "Training jobs: distributed, spot instances, automatic model tuning",
            "Endpoints: deploy models as REST APIs with auto-scaling",
            "Model Monitor: detect drift and anomalies",
            "Pipelines: MLOps orchestration",
            "Feature Store: centralized feature repository"
          ],
          whenToUse: "Custom ML models, training at scale, MLOps"
        },
        {
          name: "Amazon Bedrock",
          purpose: "Access foundation models via API",
          keyFeatures: [
            "Models: Claude (Anthropic), Llama 3, Amazon Titan, Cohere, AI21",
            "Knowledge Bases: managed RAG implementation",
            "Agents: build LLM-powered agents with tool use",
            "Guardrails: content filtering and safety",
            "Fine-tuning capabilities",
            "Private, secure - data not used for training"
          ],
          whenToUse: "LLM applications, chatbots, RAG, generative AI"
        },
        {
          name: "AWS Lambda",
          purpose: "Serverless compute",
          keyFeatures: [
            "Run code without managing servers",
            "Auto-scaling and high availability",
            "Pay only for compute time used",
            "Integrates with 200+ AWS services",
            "Support for containers and ML models"
          ],
          whenToUse: "API backends, ML inference, event-driven processing"
        }
      ]
    },
    {
      title: "Pre-built AI Services",
      services: [
        {
          name: "Amazon Rekognition",
          purpose: "Computer vision",
          keyFeatures: [
            "Face detection and recognition",
            "Object and scene detection",
            "Content moderation",
            "Celebrity recognition",
            "Text in images (OCR)"
          ],
          whenToUse: "Don't build CV models if Rekognition solves it"
        },
        {
          name: "Amazon Comprehend",
          purpose: "Natural language processing",
          keyFeatures: [
            "Sentiment analysis",
            "Entity recognition",
            "Key phrase extraction",
            "Language detection",
            "Topic modeling"
          ],
          whenToUse: "Text analysis without custom models"
        },
        {
          name: "Amazon Translate",
          purpose: "Neural machine translation",
          keyFeatures: ["75+ languages", "Real-time and batch translation", "Custom terminology"],
          whenToUse: "Multi-language applications"
        }
      ]
    },
    {
      title: "Data and Storage",
      services: [
        {
          name: "Amazon S3",
          purpose: "Object storage",
          keyFeatures: [
            "Store training data, models, artifacts",
            "Storage classes: Standard, IA, Glacier for cost optimization",
            "Versioning and lifecycle policies",
            "Event notifications for data pipelines"
          ],
          whenToUse: "All file storage needs in ML workflows"
        },
        {
          name: "AWS Glue",
          purpose: "ETL and data preparation",
          keyFeatures: [
            "Serverless data integration",
            "Data Catalog for metadata",
            "ETL jobs in Python/Spark",
            "Data quality checks"
          ],
          whenToUse: "Transform raw data for ML training"
        }
      ]
    },
    {
      title: "Interview Topics for AWS Roles",
      topics: [
        {
          category: "Service Selection",
          questions: [
            "When would you use SageMaker vs Bedrock vs pre-built services?",
            "How do you decide between Lambda and EC2 for ML inference?",
            "Compare S3, EFS, and EBS for ML data storage"
          ]
        },
        {
          category: "Cost Optimization",
          questions: [
            "How do you optimize SageMaker training costs? (Spot instances, instance types)",
            "Explain S3 storage classes and when to use each",
            "What are the cost implications of real-time vs batch inference?"
          ]
        },
        {
          category: "Architecture",
          questions: [
            "Design a scalable ML inference API on AWS",
            "How would you build a RAG system using AWS services?",
            "Architect a real-time CV system processing video streams"
          ]
        },
        {
          category: "Security and Compliance",
          questions: [
            "How do you secure ML models and data in AWS?",
            "Explain VPC, security groups, and IAM for ML workloads",
            "How does AWS handle data privacy for AI services?"
          ]
        }
      ]
    }
  ]
};

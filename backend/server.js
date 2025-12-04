dotenv.config();

const app = express();
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));
removeUnverifiedAccounts();

// allow request
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoutes);

// server listen
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/TecHub";
const port = process.env.PORT || 8000;
connection(DATABASE_URL);
app.listen(port, () => console.log(`Server listen on port ${port}`));
